# elasticsearch-bin [![Build Status](https://travis-ci.org/mastilver/elasticsearch-bin.svg?branch=master)](https://travis-ci.org/mastilver/elasticsearch-bin)

> Binary wrapper for [ElasticSearch](https://www.elastic.co/products/elasticsearch) - A search server based on Lucene.

Based on [flow-bin](https://github.com/flowtype/flow-bin)


## CLI

```
$ npm install --global elasticsearch-bin
```

```
$ elasticsearch --version
```


## API

```
$ npm install --save elasticsearch-bin
```

```js
const execFile = require('child_process').execFile;
const elasticsearch = require('elasticsearch-bin');

execFile(elasticsearch, ['--version'], (err, stdout) => {
	console.log(stdout);
});
```


## License

MIT © [Thomas Sileghem](https://mastilver.com)
