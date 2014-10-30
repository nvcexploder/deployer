var cli = require('cli');
var configurer = require('/Users/nvcexploder/src/git/nvc/deployer/lib/configure.js');
var deploy = require('./lib/deploy.js');

cli.parse({

	configure: ['c', 'configure deploy tool'],
	file: ['f', 'specify file for configuration']
});

cli.main( function (args, options) {

	if (options.configure) {
		createFile();
	}

	if (options.file) {
		configurer(file);
		deploy();
	}

	else {

		deploy();
	}
});

