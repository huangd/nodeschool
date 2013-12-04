var http = require('http');

var bl = require('bl');
var one = process.argv[2];
var two = process.argv[3];
var three = process.argv[4];

var map = {};

function printAll() {
  if (map.one && map.two && map.three) {
    console.log(map.one);
    console.log(map.two);
    console.log(map.three);
  }
}

http.get(one, function(res) {
  res.pipe(bl(function(err, data) {
    map.one = data.toString();
    printAll();
  }));
});

http.get(two, function(res) {
  res.pipe(bl(function(err, data) {
    map.two = data.toString();
    printAll();
  }));
});
http.get(three, function(res) {
  res.pipe(bl(function(err, data) {
    map.three = data.toString();
    printAll();
  }));
});
