// Rest parameters
function max(...args) {
  console.log(Array.isArray(args))  // true
  console.log(args.length)          // 6
  var max = args.reduce(function(max, n) { 
    return n > max ? n : max;
  });
  return max;
}
var maxNum = max(5, 15, 10, 1, 4, 5);
console.log(maxNum); // 15
