var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LessPluginCleanCSS = require('less-plugin-clean-css');

const ExtractScreenCSS = new ExtractTextPlugin({ filename: "../css/main.css" });


module.exports = {
	context: __dirname + "/assets",
	entry: './js/input.js',
	output: {
		path: __dirname + '/assets/js',
		filename: 'output.js'
	},

	module: {
        loaders: [
            { test: /\.less$/, loader: ExtractScreenCSS.extract({
                fallbackLoader: "style-loader",
                // loader: "css-loader?minimize-loader!postcss-loader!less-loader"
                // loader: "less-loader!postcss-loader!css-loader"
                // loader: "css-loader!postcss-loader!less-loader"
                loader: ["css-loader?minimize", "postcss-loader", "less-loader"]
            }) }
        ]
    },

    plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),

		new webpack.optimize.LimitChunkCountPlugin({maxChunks: 0}),

		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	output: {
		// 	    comments: false
		// 	},
		// }),

		ExtractScreenCSS
	],
};



