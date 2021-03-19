const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require('path')

module.exports = {
	...defaultConfig,
	entry: {
		'blockx': path.resolve(__dirname, './src/script/gutenberg.js'),
	},
	output: {
		path: path.resolve(__dirname, './public/js/gutenberg/.'),
	},
}