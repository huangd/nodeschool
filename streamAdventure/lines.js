var split = require('split');
var through = require('through');

process.stdin
  .pipe(split())
  .pipe(through(write()));

function write() {
  var lineNumber = 0;
  return function(line) {
    if (lineNumber % 2 === 0) {
      console.log(line.toLowerCase());
    } else {
      console.log(line.toUpperCase());
    }
    lineNumber++;
  };
}
