// Using recursion
const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
};

// Alternate solution using iteration
// const fibonacci = function(n) {
//   if (n < 0) return "OOPS";
//   if (n == 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (i = 1; i < n; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b;
// }

// Do not edit below this line
module.exports = fibonacci;
