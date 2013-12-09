function reduce(arr, fn, initial){
  if(arr.length === 0){
    return initial;
  }
  var element = arr.shift();
  return reduce(arr, fu, fn(initial, element));
}

module.exports = reduce;

