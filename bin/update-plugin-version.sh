#!/usr/bin/env bash
# Syncs the plugin's version carriers after release-please opened or updated the
# plugin release PR. The version comes from wp-plugin/package.json, which
# release-please bumps in that PR:
#   - wp-plugin/public/Plugin.php  "Version:" header
#   - wp-plugin/public/README.txt  "Stable tag:" and a new "= x.y.z =" section
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

PACKAGE_JSON="$ROOT_DIR/wp-plugin/package.json"
CHANGELOG="$ROOT_DIR/wp-plugin/CHANGELOG.md"
README="$ROOT_DIR/wp-plugin/public/README.txt"
PLUGIN_PHP="$ROOT_DIR/wp-plugin/public/Plugin.php"

VERSION=$(node -e "process.stdout.write(require('$PACKAGE_JSON').version)")

# BSD sed needs an explicit empty suffix for -i, GNU sed must not get one.
sed_inplace() {
  if sed --version >/dev/null 2>&1; then sed -i "$1" "$2"; else sed -i "" "$1" "$2"; fi
}
echo "🤖 Updating plugin files for version $VERSION …"

# ── 1. Update Plugin.php Version header ───────────────────────────────────
sed_inplace "s/^ \* Version: .*/ * Version: $VERSION/" "$PLUGIN_PHP"

# ── 2. Update Stable tag ────────────────────────────────────────────────────
sed_inplace "s/^Stable tag: .*/Stable tag: $VERSION/" "$README"

# ── 2. Extract and convert the changelog section for this version ────────────
# CHANGELOG.md section starts with "## [X.Y.Z]" and ends before the next "## ["
SECTION=$(awk "
  /^## \[$VERSION\]/ { found=1; next }
  found && /^## \[/ { exit }
  found { print }
" "$CHANGELOG")

if grep -qF "= $VERSION =" "$README"; then
  echo "🤖 README.txt already has a changelog entry for $VERSION — nothing to do"
  exit 0
fi

if [[ -z "$SECTION" ]]; then
  echo "🤖 No CHANGELOG.md entry found for $VERSION — skipping changelog update"
  exit 0
fi

# Convert Markdown to WordPress readme format:
#   - Drop empty lines at start/end
#   - Drop "### Category" headings
#   - Strip Markdown links from "* item ([#123](...)) " → "* item"
WP_LINES=""
while IFS= read -r line; do
  # Skip category headings
  [[ "$line" =~ ^###  ]] && continue
  # Strip inline Markdown links: [text](url) → text
  line=$(echo "$line" | sed 's/\[\([^]]*\)\]([^)]*)/\1/g')
  WP_LINES+="$line"$'\n'
done <<< "$SECTION"

# Trim leading/trailing blank lines
WP_LINES=$(echo "$WP_LINES" | sed '/./,$!d' | sed -e :a -e '/^\n*$/{$d;N;ba}')

WP_ENTRY="= $VERSION ="$'\n'"$WP_LINES"

# ── 3. Prepend entry after "== Changelog ==" ─────────────────────────────────
TMPFILE=$(mktemp)
awk -v entry="$WP_ENTRY" '
  /^== Changelog ==/ {
    print
    print ""
    print entry
    print ""
    injected = 1
    next
  }
  { print }
' "$README" > "$TMPFILE"
mv "$TMPFILE" "$README"

echo "🤖 README.txt updated successfully."
