
exports.min = function min (array) {

  if (array==0 || array==undefined){
    return 0;
  } else {
    let min=Math.min(...array);
    return min;
  }
}


exports.max = function max (array) {
  if (array==0 || array==undefined){
    return 0;
  } else { 
    let max=Math.max(...array);
    return max;
  }
}

exports.avg = function avg (array) {
  if (array==0 || array==undefined){
    return 0;
  } else {
    let sum = array.reduce((a, b) => a + b, 0);
    let result = sum / array.length;
    return result;
  }

}
