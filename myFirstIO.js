var fs = require('fs');

var filePath = process.argv[2];
var data = fs.readFileSync(filePath);
var numberOfNewLines = data.toString().split('\n').length;

console.log(numberOfNewLines-1);
