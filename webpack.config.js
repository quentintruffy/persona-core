const path = require('path');

module.exports = {
	entry: {
		client: './src/client/client.ts',
		server: './src/server/server.ts',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name]/[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	// Configuration spécifique pour le client et le serveur
	target: 'web', // Par défaut pour tous les builds

	// Configuration pour les builds séparés client/serveur
	optimization: {
		runtimeChunk: false,
	},
	// Évite les warnings sur la taille des builds
	performance: {
		hints: false,
	},
};
