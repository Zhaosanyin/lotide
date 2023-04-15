
const assertEqual = require ('./assertEqual');

// function(actual, expected) {
//   if (actual === expected) {
//     return  console.log(String.fromCodePoint('0x2705') + `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(String.fromCodePoint('0x274c') + `Assertion failed: ${actual} !== ${expected}`);
//   }
// };
const head = function(arr) {
  // define a variable for return
  const _ = require('lodash');
  let first = _.head(arr);
  return first;
};


// TEST CODE


// console.log(head([5,6,7]));


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 7);

// assertEqual(head([5,6,7]),5);

module.exports = head;