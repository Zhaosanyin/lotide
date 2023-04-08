// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
//   } else {
//     return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
//   }
// };

const countLetters = function(str) {
  const result = {};
  for (let item of str) {
    if (result[item]) {
      result[item] ++;
    } else {
      result[item] = 1;
    }
  } return result;
};

console.log(countLetters("LHL"));


//以下的更改是不对的。 str.item



// const countLetters = function(str) {
//   const result = {};
//   for (let item of str) {
//     if (result.item) {
//       result.item ++;
//     } else {
//       result.item = 1;
//     }
//   } return result;
// };

// console.log(countLetters("LHL"));