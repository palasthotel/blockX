# CI/CD Workflows

This repository releases two artefacts from one tree, versioned independently by
[release-please](https://github.com/googleapis/release-please) based on
[conventional commits](https://www.conventionalcommits.org/):
`fix:` → patch, `feat:` → minor, `feat!:` / `BREAKING CHANGE:` → major.

| Component | Version source | Tag | Goes to |
|---|---|---|---|
| `npm-package` | `npm-package/package.json` | `npm-v*` | npmjs.org and GitHub Packages |
| `wp-plugin` | `wp-plugin/package.json` | `plugin-v*` | wordpress.org SVN |

release-please assigns a commit to a component by which files it changed, and
`separate-pull-requests` means each component gets its own release PR.

---

## Overview

```
Push to main
    │
    ├──▶ [release-please.yml]
    │        Creates / updates one release PR per component
    │
    │    On the plugin release PR (opened / synchronize)
    ├──▶ [update-plugin-version.yml]
    │        Syncs Plugin.php Version + README.txt Stable tag & changelog
    │
    │    On PR to main
    └──▶ [pr.yml]
             php -l 8.1-8.4 · tsc --noEmit · build both workspaces · pack

Merge a release PR  →  release-please pushes its tag and creates a GitHub Release
    │
    ├── npm-v*     ──▶ [npm-publish.yml]
    │                      npmjs.org (OIDC) + GitHub Packages
    │
    └── plugin-v*  ──▶ [wordpress-svn-release.yml]
                           version check → build → pack → upload zip
                           → SVN trunk + tags/$VERSION + assets/
```

---

## Workflows

### `pr.yml` — PR Checks

**Trigger:** Any pull request targeting `main`

Four jobs:

1. `php -l` over every PHP file on 8.1 to 8.4.
2. `tsc --noEmit` over `npm-package/src`. The plugin bundle is JavaScript and its
   `@wordpress` imports are externalised, so this is the only place where types
   are checked at all.
3. A build of both workspaces. It fails if the editor bundle is missing
   afterwards, and if `npm-package/package.json` references any file the build did
   not produce — the failure mode that appeared during the tsup to tsdown
   migration, where the output names changed from `lib.js` to `lib.cjs`.
4. `bin/build-plugin.sh`, so a broken pack surfaces in the pull request.

---

### `release-please.yml` — Release PR Management

**Trigger:** Push to `main`
**Token:** installation token of the org-owned *Palasthotel Release Bot* GitHub
App. Required because `GITHUB_TOKEN` pushes do not trigger downstream workflows —
the tags would never start `npm-publish.yml` or `wordpress-svn-release.yml`.

---

### `update-plugin-version.yml` — Plugin Version Files

**Trigger:** `pull_request` on `main`, types `opened` and `synchronize`
**Condition:** only the release-please PR for the **plugin** component, and only
when its head branch lives in this repository

That head-repo condition is what makes this safe: the job checks out the pull
request head and runs a script from it. `github.head_ref` alone is no guard,
because a fork can name its branch anything, including `release-please--*`. For
the same reason this workflow uses `pull_request` and not
`pull_request_target` — the latter would hand the base repository's write token
to code from the pull request.

`bin/update-plugin-version.sh` reads the version from `wp-plugin/package.json`
and writes it into the `Version:` header of `wp-plugin/public/Plugin.php` and the
`Stable tag:` of `wp-plugin/public/README.txt`, then converts that version's
`CHANGELOG.md` section into WordPress readme format. It is idempotent.

---

### `npm-publish.yml` — Publish the library

**Trigger:** Push of an `npm-v*` tag

Publishes `npm-package/` twice: to npmjs.org using the workflow's OIDC identity
(no long-lived token — `NODE_AUTH_TOKEN` is cleared first so it cannot take
precedence), and to GitHub Packages with `GITHUB_TOKEN`. `prepublishOnly` builds
the library, and `npm audit --audit-level=critical` runs before either publish.

The plugin workspace is not built here; the library does not depend on it.

---

### `wordpress-svn-release.yml` — Deploy to WordPress.org

**Trigger:** Push of a `plugin-v*` tag, or `workflow_dispatch` with a version input

```
Tag: plugin-v1.10.4
      │
      ├── strip prefix → VERSION=1.10.4
      │
      ├── bin/version-checker.sh
      │       wp-plugin/package.json == README.txt Stable tag
      │       == Plugin.php Version == tag
      │       mismatch → job fails before anything is published
      │
      ├── npm run pack  (bin/build-plugin.sh)
      │       builds the library, then the plugin bundle
      │       stages wp-plugin/public/ → build/blockx/
      │       composer install --no-dev, then drops the composer files
      │       zip → blockx.zip
      │
      ├──▶ Upload blockx.zip to the GitHub Release
      │
      └── SVN commit
              rm trunk/*  +  rm tags/$VERSION
              rsync -rL build/blockx/ → trunk/  →  tags/$VERSION/
              rsync --delete assets/ → assets/   (plugin page media)
              svn add --force . · svn rm deleted files · svn commit
```

The SVN step copies **`build/blockx/`**, not `wp-plugin/public/`, so what reaches
wordpress.org is exactly what is in the zip: the built editor bundle and a
`--no-dev` autoloader, without the composer files that live in the repository.

`rsync -rL` rather than `cp -r` because `cp` is platform-dependent — GNU `cp`
keeps symlinks while descending a directory, BSD `cp` resolves them — and SVN
refuses a commit that puts a symlink where it versions a regular file.

`assets/` sits next to `trunk/` in the SVN repository and is served on the plugin
page only. The repository mirrors it with `--delete`, so it is the source of
truth; its four files were imported from SVN before the mirror went live.

### Re-running a failed deploy

A tag ruleset prevents `plugin-v*` tags from being moved, and re-running a tag
event always replays the workflow file as it existed at that tag — so a fix to
the workflow cannot be picked up by re-running the failed job. Use **Run
workflow** instead, select the branch carrying the fix and enter the version
without the prefix. A dispatch run deploys the content of the ref you select;
`bin/version-checker.sh` fails the job before anything is published if the
version does not match.

---

## Required secrets / variables

| Name | Type | Level | Value |
|---|---|---|---|
| `RELEASE_BOT_APP_ID` | variable | org | App ID of the *Palasthotel Release Bot* GitHub App |
| `RELEASE_BOT_PRIVATE_KEY` | secret | org | that app's private key (full `.pem`, incl. BEGIN/END lines) |
| `SVN_USERNAME` | secret | org | WordPress.org committer |
| `SVN_PASSWORD` | secret | org | WordPress.org password |
| `SVN_REPO_URL` | variable | repo | `https://plugins.svn.wordpress.org/blockx` |

Publishing to npmjs.org needs no secret: the package has to be configured for
trusted publishing from this repository and workflow. GitHub Packages uses the
per-run `GITHUB_TOKEN`.

The GitHub App is installed on this repository with `Contents: read & write` and
`Pull requests: read & write`. Add it as a ruleset bypass actor if a tag ruleset
restricts creating `npm-v*` / `plugin-v*` tags, or a ruleset forbids direct
pushes to the `release-please--*` branches — otherwise the bot cannot tag a
release or update its own release PR.
