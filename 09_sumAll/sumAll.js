const sumAll = function(first, last) {
  const sort = Array.from(arguments).sort((a, b) => a - b);
  if (!(first > 0) || !(last > 0) || !(Number.isInteger(first)) || !(Number.isInteger(last))) {
    return("ERROR");
  }
  let sum = 0;
  for (i = sort[0]; i <= sort[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
