module.exports = {
	src: "./src", // The private directory where Ingrid looks for HTML and Markdown files
	dist: "./dist", // The public directory where your site build is output
	ignorePattern: /^_/, // By default, files and directories whose names begin with an underscore "_" are ignored
	global: {
		openExp: '{*',
		closeExp: '*}',
	}, // An object of values that can be interpolated anywhere in your site using starburns syntax: {* example_value *}
}