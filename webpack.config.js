module.exports = {
	entry: './app/index.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			Main: 'app/components/layouts/main.js',
			Header: 'app/components/layouts/header.js',
			Menu: 'app/components/layouts/menu.js',
			Content: 'app/components/layouts/content.js',
			Footer: 'app/components/layouts/footer.js'
		}
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /node_module/
		}
		]
	}
};