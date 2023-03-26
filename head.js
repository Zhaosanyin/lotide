
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return  console.log(String.fromCodePoint('0x2705') + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(String.fromCodePoint('0x274c') + `Assertion failed: ${actual} !== ${expected}`);
  }
};
const head = function(arr) {
  // define a variable for return
  const _ = require('lodash');
  let first = _.head(arr);
  return first;
};
assertEqual("lighthouse", "lighthouse");
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 7);

assertEqual(head([5,6,7]),5);