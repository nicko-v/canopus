const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname, 'app/client/src'), // absolute path. the entry and module.rules.loader option is resolved relative to this directory

	entry: ['babel-polyfill', './index.jsx'], // Here the application starts executing and webpack starts bundling

	output: { // options related to how webpack emits results
		path: path.resolve(__dirname, 'app/client/build'), // the target directory for all output files must be an absolute path (use the Node.js path module)
		filename: 'app.js', // the filename template for entry chunks
		publicPath: '/', // the url to the output directory resolved relative to the HTML page
	},

	module: { // configuration regarding modules
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader' // the loader which should be applied, it'll be resolved relative to the context
			},

			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader']),
			},

			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|ico)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
		]
	},

	plugins: [ // list of additional plugins
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'app/client/src/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: 'styles.css'
		})
	],

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			"Src": path.resolve(__dirname, 'app/client/src'),
		},
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'app/client/build'), // static file location
		compress: true, // enable gzip compression
		https: false, // true for self-signed, object for cert authority
		noInfo: true, // only errors & warns on hot reload
	},

	devtool: 'source-map',
};