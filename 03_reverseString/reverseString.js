const reverseString = function(input) {
    let leftover = input;
    let reversed = '';
    for (let i = 0; i < input.length; i++) {
        let lastLetter = leftover.slice(leftover.length - 1);
        reversed += lastLetter;
        leftover = leftover.slice(0, leftover.length - 1);
    };
    return reversed;
};

// Alternative
// const reverseString = function(input) {
//     return input.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
