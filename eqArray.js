 
 const eqArray = function(actual, expected) {
  if (actual.length === expected.length && actual.every((element, index)=>element === expected[index])) {
    return true;
    
    // (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return false;
    // (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};


//eqArray([1, 2, 3], [1, 2, 3]);
/*
eqArray([1, 2, 3], [1, 2, 3]); // => true
eqArray([1, 2, 3], [3, 2, 1]); // => false

eqArray(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArray(["1", "2", "3"], ["1", "2", 3]); // => false */

// eqArray("Lighthouse Labs", "Bootcamp");
// eqArray(1, 1);
// eqArray("Lighthouse Labs", "Lighthouse Labs");
// eqArray(1, 7);

console.log(eqArray([1, 2, 3], [1, 2, 3]));
console.log(eqArray([1, 2, 3], [3, 2, 1]));
console.log(eqArray(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArray(["1", "2", "3"], ["1", "2", 3]));

module.exports = eqArray;