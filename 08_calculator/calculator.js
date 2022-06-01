const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  array.forEach(number => {
    total += number;
  });
  return total;
};

// Alternate solution
// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// };

// const multiply = function(array) {
  let product = 1;
  array.forEach(number => {
    product *= number;
  })
  return product;
};

// Alternate solution
// const multiply = function(array) {
//   return array.length 
//     ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//     : 0;
// }

const power = function(base, exponent) {
	return base ** exponent;
};

// Alternate solution
// const power = function(a,b) {
//   return Math.power(a,b);
// };

const factorial = function(number) {
	let result = 1;
  for (i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Alternate solution
// const factorial = function(n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
