const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const palindromes = function (string) {
  // let cleanString = string
  //   .toLowerCase()
  //   .split('')
  //   .filter(char => punctuation.indexOf(char) === -1 && char !== " ")
  //   .join('');

  // Alternate way to process string with regex
  let cleanString = string
    .toLowerCase()
    .replace(/[^a-z]/g, "");

  let reverseString = cleanString.split("").reverse().join("");
  return reverseString === cleanString;
};


// Do not edit below this line
module.exports = palindromes;
