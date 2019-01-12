const webpack = require('webpack');

const {PATHS} = require('./webpack.common.js');

const devConfig = {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: PATHS.build,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin()
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
		//new MyPlugin({
		//	path: PATHS.build,
		//	message: 'HELLO ! ! !'
		//})
	]
}


module.exports = devConfig;