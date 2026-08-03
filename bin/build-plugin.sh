#!/bin/sh
# Builds both workspaces and zips wp-plugin/public/ — exactly what is deployed to
# WordPress.org — into blockx.zip in the project root.
#
# The order matters: wp-plugin's editor bundle imports @palasthotel/blockx, which
# npm resolves to the local workspace, so the library has to be built first. The
# root build script does them in that order.
set -e

PLUGIN_SLUG="blockx"
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_PATH=$(cd "$SCRIPT_DIR/.." && pwd)
BUILD_PATH="$PROJECT_PATH/build"
DEST_PATH="$BUILD_PATH/$PLUGIN_SLUG"

cd "$PROJECT_PATH"
npm run build

echo "Generating build directory..."
rm -rf "$BUILD_PATH"
mkdir -p "$DEST_PATH"

echo "Syncing files..."
rsync -rL "$PROJECT_PATH/wp-plugin/public/" "$DEST_PATH/"

echo "Installing the production autoloader..."
cd "$DEST_PATH"
# --no-dev keeps development requirements out of the released plugin, and install
# honours composer.lock where update would ignore it. The composer files
# themselves are not shipped, only the generated vendor directory.
composer install --no-dev --no-interaction --quiet
composer dump-autoload --no-dev --optimize --quiet
rm -f composer.json composer.lock
cd "$PROJECT_PATH"

echo "Generating zip file..."
cd "$BUILD_PATH" || exit 1
zip -q -r "${PLUGIN_SLUG}.zip" "$PLUGIN_SLUG/"
mv "${PLUGIN_SLUG}.zip" "$PROJECT_PATH/"

cd "$PROJECT_PATH" || exit 1
echo "${PLUGIN_SLUG}.zip file generated!"
echo "Build done!"
