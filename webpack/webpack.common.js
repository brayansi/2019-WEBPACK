const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	build: path.resolve(__dirname, '../dist')
}

const commonConfig = {
	entry: {
		bundle: `${PATHS.src}/index.js`,
		//app: `${PATHS.src}/index2.js`
	},
	output: {
		filename: '[name].[hash].js',
		path: PATHS.build
	},
	module: {
		rules: [
			{
				test: /\.(jpg|png|svg)$/,
				use: {loader: 'url-loader'}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'TW Webpack',
			template: `${PATHS.src}/index.html`
		})
	]
}


module.exports = {PATHS, commonConfig}