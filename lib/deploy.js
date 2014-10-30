var Fs = require('fs');
var Async = require('async');
var Spawn = require('child_process').spawn;
var SSH = require('simple-ssh');

var configuration = require('./configure');

var internals = {

	ignore: ['.gitignore', '.jshintignore', '.jshintrc', 'LICENSE', 'README.md', 'node_modules'],

	filterFiles: function (files) {

		var filteredFiles = [];
		for ( var i=0, fl = files.length; i < fl; i++ ){
			if(internals.ignore.join(',').indexOf(files[i]) === -1){
				filteredFiles.push(files[i]);
			}
		}
		return filteredFiles;
	}
}


module.exports = function () {

	internals.ssh = SSH({host: })

	var sendFileToServer = function () {


	}

	var zipDirectory = function () {

		var tar = Spawn.tar('tar', ['-cvzf', 'tmp.tgz', './tmp']);

		tar.on('close', function (code) {

			sendFileToServer();
		});
	};

	var moveFilesToDirectory = function () {

		var files = Fs.readdir(process.cwd(), function (err, files) {

			if(err){
				throw err;
			}

			else {

				Async.each(internals.filterFiles(files), function (item, callback) {

					var cp = Spawn('cp', ['-r', process.cwd() + '/' + item, process.cwd() + '/tmp']);
					cp.on('close', function (code) {

						callback();
					});
				}, function (err) {

					if(err){ 
						throw err;
					}

					else {

						zipDirectory();
					}
				});
			}	
		});
	};


	
	//make a new directory
	Fs.mkdir(process.cwd() + '/tmp', function (err) {

		if(err){
			throw err;
		} 

		else {
			moveFilesToDirectory();
		}
	});

}

