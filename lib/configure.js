var Ignore = require('ignore');
var Zlib = require('zlib');
var Cli = require('cli');
var SSH = require('simple-ssh');

var Inquirer = require('inquirer');

var internals = {};

internal.processFile = function (file) {


}

internal.questions = [
	{ type: 'input', name: 'hostname', message: 'Please enter hostname or IP' },
	{ type: 'input', name: 'user', message: 'User on target system' }
];

module.exports = function (/* file */) {
	
	Inquirer.prompt(internals.questions, function (answers) {

		internals.hostname = answers.hostname;
		internals.username = answers.username;


		return true;
	});
};

module.exports.config = function () {

	return {
		hostname: internals.hostname,
		username: internals.username
	}
};