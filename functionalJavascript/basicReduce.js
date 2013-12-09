module.exports = function countWords(inputWords) {
  return inputWords.reduce(function(previous, current) {
    if (previous[current]) {
      previous[current]++;
    } else {
      previous[current] = 1;
    }
    return previous;
  }, {});
};
