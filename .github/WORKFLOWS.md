# CI/CD Workflows

This repository releases two artefacts from one tree, versioned independently by
[release-please](https://github.com/googleapis/release-please) based on
[conventional commits](https://www.conventionalcommits.org/):
`fix:` → patch, `feat:` → minor, `feat!:` / `BREAKING CHANGE:` → major.

| Component | Version source | Tag | Goes to |
|---|---|---|---|
| `npm-package` | `npm-package/package.json` | `npm-v*` | npmjs.org and GitHub Packages |
| `wp-plugin` | `wp-plugin/package.json` | `plugin-v*` | wordpress.org SVN, slug `blockx` |

release-please assigns a commit to a component by which files it changed, and
`separate-pull-requests` means each component gets its own release PR.

The plugin workflows call the shared ones in
[palasthotel/github-workflows](https://github.com/palasthotel/github-workflows), with
`root: wp-plugin`. How they work and every input is described there, in
[docs/wp-plugin.md](https://github.com/palasthotel/github-workflows/blob/main/docs/wp-plugin.md).

```
Push to main
    │
    ├──▶ [release-please.yml]          shared, one release PR per component
    │
    │    On a release PR (opened / synchronize)
    ├──▶ [update-plugin-version.yml]   shared, Version header + Stable tag + readme changelog
    │                                  (on the npm release PR there is nothing to do)
    │    On PR to main
    └──▶ [pr.yml]                      shared plugin checks + npm package checks

Merge a release PR  →  release-please pushes its tag and creates a GitHub Release
    │
    ├── npm-v*     ──▶ [npm-publish.yml]            npmjs.org (OIDC) + GitHub Packages
    │
    └── plugin-v*  ──▶ [wordpress-svn-release.yml]  shared scripts: version check → build
                                                     → pack → zip to the release
                                                     → SVN trunk + tags/$VERSION + assets/
```

## What is specific to this repository

| | |
|---|---|
| wordpress.org slug | `blockx` |
| plugin root | `wp-plugin/` - version file `wp-plugin/package.json`, changelog `wp-plugin/CHANGELOG.md`, payload `wp-plugin/public/` |
| build step | `npm ci && npm run build` in the repository root: the library first, because the editor bundle imports `@palasthotel/blockx` from the workspace |
| composer | `wp-plugin/public/composer.json` only provides the autoloader; the pack installs it with `--no-dev --optimize` and drops the composer files |
| plugin page media | `assets/` in the repository root, mirrored to SVN `assets/` with `--delete` - the repository is the source of truth |

### `pr.yml`

Two jobs. `plugin` calls the shared `wp-plugin-pr.yml`: `php -l` on PHP 8.1 to 8.4,
the build, a pack with assertions on the payload - the files `Assets.php` and
`Gutenberg.php` load have to be in it, the composer files, symlinks and the
development wrapper must not - and the version carriers. `npm-package` runs
`tsc --noEmit` over `npm-package/src`, builds the library and fails if
`npm-package/package.json` references a file the build did not produce.

### `wordpress-svn-release.yml`

The only workflow that is not a shared caller. The shared deploy takes the version
from a `v*` tag; the plugin's tags are `plugin-v*`, so it would read the version as
`plugin-v1.10.4`, and a dispatch run would attach the zip to a release `v1.10.4`
that does not exist. The job therefore stays in this repository, but runs the shared
scripts from `palasthotel/github-workflows@v1` - `check-version.sh`, `pack.sh` and
`svn-prepare.sh` - so it gets the same fixes as every other plugin. Once the shared
deploy accepts a tag prefix, this file becomes a three-line caller like the others.

### Re-running a failed deploy

A tag ruleset prevents `plugin-v*` tags from being moved, and re-running a tag event
replays the workflow file as it existed at that tag. Use **Run workflow** instead,
select the branch carrying the fix and enter the version without the prefix.
`check-version.sh` fails the job before anything is published if the version does
not match.

### `npm-publish.yml`

**Trigger:** Push of an `npm-v*` tag

Publishes `npm-package/` twice: to npmjs.org using the workflow's OIDC identity (no
long-lived token - `NODE_AUTH_TOKEN` is cleared first so it cannot take
precedence), and to GitHub Packages with `GITHUB_TOKEN`. `prepublishOnly` builds the
library, and `npm audit --audit-level=critical` runs before either publish.

## Required secrets / variables

| Name | Type | Level | Value |
|---|---|---|---|
| `RELEASE_BOT_APP_ID` | variable | org | App ID of the *Palasthotel Release Bot* GitHub App |
| `RELEASE_BOT_PRIVATE_KEY` | secret | org | that app's private key |
| `SVN_USERNAME` | secret | org | WordPress.org committer |
| `SVN_PASSWORD` | secret | org | WordPress.org password |

The repository variable `SVN_REPO_URL` is no longer read - the SVN URL comes from the
slug - and can be deleted.

Publishing to npmjs.org needs no secret: the package has to be configured for trusted
publishing from this repository and workflow. GitHub Packages uses the per-run
`GITHUB_TOKEN`.

The GitHub App is installed on this repository with `Contents: read & write` and
`Pull requests: read & write`. Add it as a ruleset bypass actor if a tag ruleset
restricts creating `npm-v*` / `plugin-v*` tags, or a ruleset forbids direct pushes to
the `release-please--*` branches.
