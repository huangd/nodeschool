var filteredLSModule = require('./filteredLSModule.js');

var dirPath = process.argv[2];
var extension = process.argv[3];

filteredLSModule(dirPath, extension, function(err, list) {
  if (err) {
    console.log(err);
  }
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
});
