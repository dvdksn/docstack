// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: [
		'@snowpack/plugin-typescript',
	],
	mount: {
		'src/components': '/_components',
		'src/data': '/_data',
	},
	alias: {
		$components: './src/components',
		$types: './src/types',
		$data: './src/data',
	}
};
