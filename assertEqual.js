// FUNCTION IMPLEMENTATION
//const actual =1 ;
//const expected =2;
const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
//   } else {
//     return(console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected))
//   }
// };

  if (actual === expected) {
    return console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected);
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};


console.assert(assertEqual("lighthouse", "lighthouse"));
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 7);

module.exports = assertEqual;

//tring.fromCodePoint('0x2705') add the emoji symbol