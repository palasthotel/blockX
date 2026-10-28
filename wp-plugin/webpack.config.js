/**
 * The wp-scripts default config, plus a CycloneDX SBOM in production builds.
 *
 * The entry and the output path stay on the command line of the build and watch
 * scripts in package.json.
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const { CycloneDxWebpackPlugin } = require("@cyclonedx/webpack-plugin");

/**
 * Production builds also write a CycloneDX SBOM of what webpack bundled
 * (public/assets/dist/cyclonedx/bom.json and bom.xml). The release workflows of
 * palasthotel/github-workflows send it to Dependency-Track and keep the cyclonedx
 * directory out of the plugin payload, so it never ships to wordpress.org.
 *
 * @param {Object} config A webpack config.
 * @return {Object} The config, with the SBOM plugin in production mode.
 */
function withSbom(config) {
    if (config.mode !== "production") {
        return config;
    }
    return {
        ...config,
        plugins: [
            ...config.plugins,
            new CycloneDxWebpackPlugin({
                specVersion: "1.6",
                outputLocation: "./cyclonedx",
                includeWellknown: false,
                reproducibleResults: true,
            }),
        ],
    };
}

module.exports = Array.isArray(defaultConfig)
    ? defaultConfig.map(withSbom)
    : withSbom(defaultConfig);
