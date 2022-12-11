const caesar = function(string, key) {
  const plaintext = string.split("");
  
  const shift = (char) => {
    if (char.match(/[A-Z]/)) {
      let ord = char.charCodeAt()
      return String.fromCharCode(
        ((ord - 64) + (mod(key, 26))) % 26 + 64
      );
    } else if (char.match(/[a-z]/)) {
      let ord = char.charCodeAt()
      return String.fromCharCode(
        ((ord - 96) + (mod(key,26))) % 26 + 96
      );
    } else {
      return char;
    }
  }

  // Define modulo method to return positive remainders for negative dividends
  const mod = (n, mod) => {
    return ((n % mod) + mod) % mod
  }

  const ciphertext = plaintext.map(shift).join("");
  return ciphertext
};

// Do not edit below this line
module.exports = caesar;
