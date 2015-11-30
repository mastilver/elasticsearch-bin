'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '2.1.0';
var URL = 'https://download.elasticsearch.org/elasticsearch/release/org/elasticsearch/distribution/zip/elasticsearch/' + VERSION + '/elasticsearch-' + VERSION + '.zip';

module.exports = new BinWrapper()
	.src(URL)
	.dest(path.join(__dirname, '../vendor'))
	.use('bin/elasticsearch' + (process.platform === 'win32' ? '.bat' : ''));
