
const assertEqual = function(actual, expected) {
  let actualCvt = actual.join();
  let expectedCvt = expected.join();
  if (actualCvt === expectedCvt) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};

//console.assert(assertEqual("lighthouse", "lighthouse"));
// TEST CODE
const tail = function(arr) {
  const _ = require('lodash');
  const arrCvt = _.tail(arr);
  return arrCvt;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


/*  TEST CODE

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

*/