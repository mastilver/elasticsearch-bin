'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['--version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('elastic-search binary test failed');
		return;
	}

	log.success('elastic-search binary test passed successfully');
});
