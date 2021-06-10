import path from 'path';

export default function (options) {
	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		fileName: 'plugin.js',
		options,
	});
}