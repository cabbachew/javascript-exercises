const getTheTitles = function(books) {
  let titles = [];
  books.forEach(book => titles.push(book.title));
  return titles;
};

// Alternate solution using map method
// const getTheTitles = function(array) {
//   return array.map(book => book)
// };

// Do not edit below this line
module.exports = getTheTitles;
