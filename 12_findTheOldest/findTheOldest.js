const findTheOldest = function(people) { // Takes an array
  const currentYear = (new Date()).getFullYear();
  return people.reduce((a, b) => {
    let aAge, bAge;
    if (a.yearOfDeath === undefined) {
      aAge = currentYear - a.yearOfBirth;
    } else {
      aAge = a.yearOfDeath - a.yearOfBirth;
    }
    if (b.yearOfDeath === undefined) {
      bAge = currentYear - b.yearOfBirth;
    } else {
      bAge = b.yearOfDeath - b.yearOfBirth;
    }
    return aAge > bAge ? a : b;
  });
};

// Alternate solution using helper function
// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
