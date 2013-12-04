var fs = require('fs');

var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, function(err, list) {
  var regExp = new RegExp('\\.' + extension + '$');
  for (var index in list) {
    if (regExp.test(list[index])) {
      console.log(list[index]);
    }
  }
});
