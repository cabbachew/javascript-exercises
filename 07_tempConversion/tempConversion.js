// Fahrenheit to Celsius: (F - 32) x 5/9
const ftoc = function(f) {
  var temp = (f - 32) * 5/9;
  return round(temp, 1);
};

// Celsius to Fahrenheit: C x 9/5 + 32
const ctof = function(c) {
  var temp = c * 9/5 + 32;
  return round(temp, 1);
};

// Define a rounding function
function round(num, precision = 0) {
  var multiplier = Math.pow(10, precision);
  return Math.round(num * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
