// Helper: root() is defined at the bottom
var path = require('path');
var webpack = require('webpack');
const argv = require("yargs").argv;

// Webpack Plugins



/**
 * Env
 * Get npm lifecycle event to identify the environment
 */

var isTestWatch = argv['auto-watch'];

module.exports = function makeWebpackConfig() {
	/**
	 * Config
	 * Reference: http://webpack.github.io/docs/configuration.html
	 * This is the object where all configuration gets set
	 */
	var config = {};

	config.devtool = 'inline-source-map';

	/**
	 * Resolve
	 * Reference: http://webpack.github.io/docs/configuration.html#resolve
	 */
	config.resolve = {
		extensions: ['.ts', '.js', '.json']
	};

	var atlOptions = '';
	if (!isTestWatch) {
		// awesome-typescript-loader needs to output inlineSourceMap for code coverage to work with source maps.
		atlOptions = {
			inlineSourceMap: true,
			sourceMap: false
		};
	}

	/**
	 * Loaders
	 * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
	 * List: http://webpack.github.io/docs/list-of-loaders.html
	 * This handles most of the magic responsible for converting modules
	 */
	config.module = {
		rules: [
			// Support for .ts files.
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: atlOptions
					}],
				exclude: [/\.(e2e)\.ts$/ , /node_modules/]
			},
		]
	};

	// if (!isTestWatch) {
	// 	// instrument only testing sources with Istanbul, covers ts files
	// 	config.module.postLoaders.push({
	// 		test: /\.ts$/,
	// 		include: path.resolve('src'),
	// 		loader: 'istanbul-instrumenter-loader',
	// 		exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
	// 	});
	// }

	/**
	 * Plugins
	 * Reference: http://webpack.github.io/docs/configuration.html#plugins
	 * List: http://webpack.github.io/docs/list-of-plugins.html
	 */
	config.plugins = [
	];

	return config;
}();

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}
