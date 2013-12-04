var fs = require('fs');

module.exports = function(dirPath, extension, callback) {
  var filteredList = [];
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      return callback(err);
    }
    var regExp = new RegExp('\\.' + extension + '$');
    for (var index in list) {
      if (regExp.test(list[index])) {
        filteredList.push(list[index]);
      }
    }
    callback(null, filteredList);
  });
};
