# Contributing

## Repository layout

This repository releases two artefacts, versioned independently:

| Path | Artefact | Released as |
|---|---|---|
| `npm-package/` | `@palasthotel/blockx` — React editor views and editor widgets | npm and GitHub Packages, tag `npm-v*` |
| `wp-plugin/` | the WordPress plugin, including the editor bundle | wordpress.org, tag `plugin-v*` |

`wp-plugin/public/` is exactly what ships to wordpress.org. `assets/` in the
repository root is the media for the wordpress.org plugin page — banner, icon,
screenshots — and is not part of the download.

The two are coupled: the editor bundle imports `@palasthotel/blockx`. The root
`package.json` declares npm workspaces, so that import resolves to
`npm-package/` locally instead of to the published package. **The library has to
be built before the plugin**, which is what `npm run build` does.

## Branching

`main` is the default branch and always reflects what is released (or about to
be). Work on a feature branch and open a pull request against `main`.

## Commit messages

Releases and both changelogs are generated from the commit history, so commit
messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope][!]: <description>
```

| Type | Effect on the version | Appears in changelog |
|---|---|---|
| `fix:` | patch (1.10.3 → 1.10.4) | yes, "Bug Fixes" |
| `feat:` | minor (1.10.3 → 1.11.0) | yes, "Features" |
| `feat!:` or a `BREAKING CHANGE:` footer | major (1.10.3 → 2.0.0) | yes, highlighted |
| `docs:`, `refactor:`, `chore:`, `deps:`, `style:`, `test:`, `ci:` | none | no |

release-please attributes a commit to a component by **which files it changed**,
not by the scope in the message. A commit touching only `npm-package/` releases
the library; one touching only `wp-plugin/` releases the plugin. A commit touching
both releases both, so prefer keeping them apart.

### Which changes get `fix:` or `feat:`

Only changes that matter to someone consuming the released artefact — a site
running the plugin, or a project depending on the npm package. `fix:` and `feat:`
decide the version *and* write the line that ends up in the changelog those people
read, so the question to ask before committing is whether they would care about
that line.

Everything else takes a type that releases nothing — workflows and CI, release
tooling, repository documentation, internal refactoring, and anything touching
files that are not shipped. As a rule of thumb, a change confined to files outside
`wp-plugin/public/` and `npm-package/src/` is almost never a `fix:`.

That includes hardening. Blocking direct access to a file that is not part of the
download is `chore:`, not `fix:` — nothing changes for anyone who installed the
plugin.

## Versions

Never edit version numbers by hand. `npm-package/package.json`,
`wp-plugin/package.json`, both `CHANGELOG.md` files, the `Version:` header in
`wp-plugin/public/Plugin.php` and the `Stable tag:` in
`wp-plugin/public/README.txt` are all maintained by the release pipeline — see
[.github/WORKFLOWS.md](.github/WORKFLOWS.md).

Content changes to `wp-plugin/public/README.txt` (description, FAQ, tested-up-to)
are of course made by hand; just leave `Stable tag:` and the `== Changelog ==`
entries alone.

## Local development

```sh
npm install          # installs both workspaces
npm run build        # library first, then the plugin bundle
npm run watch        # rebuilds the plugin bundle on change
npm run pack         # builds, then → wp-plugin/build/blockx/ and wp-plugin/blockx.zip,
                     # exactly what the release deploys
```

`npm run pack` runs the shared pack script from
[palasthotel/github-workflows](https://github.com/palasthotel/github-workflows), which
has to be checked out next to this repository, and needs `composer` for the
`--no-dev` autoloader.

To run the plugin from a checkout, symlink or copy `wp-plugin/` into
`wp-content/plugins/`. WordPress only discovers plugin files one directory level
deep, so it would never find `public/Plugin.php` — the `plugin.php` wrapper next
to it includes that file and registers the activation hooks against the file
WordPress actually knows about. It carries `X.X.X` as its version so it is obvious
in the plugin list that this entry is never released.

## Checks

Every pull request runs two jobs:

- `plugin`, the shared WordPress plugin check: `php -l` over `wp-plugin/` on 8.1, 8.2,
  8.3 and 8.4 - the plugin declares `Requires PHP: 8.1` -, a build of both
  workspaces, a pack with assertions on the payload (the editor bundle, the
  `block.json` templates, the autoloader, the translations and `LICENSE` must be in
  it; composer files, symlinks and the development wrapper must not), and a check
  that `wp-plugin/package.json`, the `Version:` header and the `Stable tag:` agree.
- `npm-package`: `tsc --noEmit` over `npm-package/src`, under `strict`,
  `noUnusedLocals` and `noUnusedParameters`, a build of the library, and a check that
  `npm-package/package.json` points only at output the build produced. This is the
  only type check in the repository: the plugin bundle is JavaScript, and its
  `@wordpress` imports are externalised, so webpack never checks those either.

Locally: `npm run lint --workspace @palasthotel/blockx`.

## The main file keeps its name

`wp-plugin/public/Plugin.php` must keep its name. WordPress identifies an installed
plugin by `<directory>/<main file>` and stores that pair in `active_plugins`;
renaming it deactivates the plugin on every site at the next update.
