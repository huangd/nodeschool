var trumpet = require('trumpet');
var tr = trumpet();

var through = require('through');

process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();

stream.pipe(through(function(data) {
  process.stdout.write(data.toString().toUpperCase());
}));

