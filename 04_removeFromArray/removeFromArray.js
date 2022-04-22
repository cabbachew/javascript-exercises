const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Using the forEach() method

// const removeFromArray = function(array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };


// Using the filter() method

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// };
//

// Do not edit below this line
module.exports = removeFromArray;
