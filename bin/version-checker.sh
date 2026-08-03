#!/usr/bin/env bash
# Guard for the plugin release job: the tag being released must match every version
# carrier of the WordPress plugin. Expects VERSION in the environment (without the
# "plugin-v" prefix).
#
# The npm package is versioned independently and is deliberately not checked here.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

VERSION="${VERSION:-}"
if [[ -z "$VERSION" ]]; then
  echo "ERROR: VERSION is not set (e.g. VERSION=1.10.4)" >&2
  exit 1
fi

# 1) wp-plugin/package.json — maintained by release-please
PACKAGE_VERSION="$(node -e "process.stdout.write(require('$ROOT_DIR/wp-plugin/package.json').version)")"

# 2) README.txt "Stable tag:"
README_VERSION="$(grep -E '^Stable tag:' "$ROOT_DIR/wp-plugin/public/README.txt" \
  | head -n1 | sed -E 's/^Stable tag:[[:space:]]*//')"

# 3) Plugin.php plugin header "Version:"
PLUGIN_VERSION="$(grep -E '^[[:space:]]*\*?[[:space:]]*Version:[[:space:]]*[0-9]+\.[0-9]+' "$ROOT_DIR/wp-plugin/public/Plugin.php" \
  | head -n1 \
  | sed -E 's/.*Version:[[:space:]]*([0-9]+(\.[0-9]+)+).*/\1/')"

fail=0

check_eq() {
  local label="$1"
  local got="$2"
  if [[ -z "$got" ]]; then
    echo "ERROR: could not read ${label}" >&2
    fail=1
  elif [[ "$got" != "$VERSION" ]]; then
    echo "ERROR: ${label} is $got, expected $VERSION" >&2
    fail=1
  else
    echo "OK: ${label} == $VERSION"
  fi
}

check_eq "wp-plugin/package.json version" "$PACKAGE_VERSION"
check_eq "README.txt Stable tag" "$README_VERSION"
check_eq "Plugin.php Version" "$PLUGIN_VERSION"

if [[ "$fail" -ne 0 ]]; then
  echo "Release version check failed." >&2
  exit 1
fi

echo "All versions match ✅"
