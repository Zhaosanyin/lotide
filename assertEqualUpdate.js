/*const eqArray = function(actual, expected) {
  if (actual.length === expected.length && actual.every((element, index)=>element === expected[index])) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};


//eqArray([1, 2, 3], [1, 2, 3]);

eqArray([1, 2, 3], [1, 2, 3]); // => true
eqArray([1, 2, 3], [3, 2, 1]); // => false

eqArray(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArray(["1", "2", "3"], ["1", "2", 3]); // => false */


const assertEqual = function (actual, expected){
  if (actual === expected) {
    return console.log(`${String.fromCodePoint('0x2705')}  Assertion Passed: ${actual} === ${expected} `)
  } else {
    return console.log ( `${String.fromCodePoint('0x274c')} Assertion Failed: ${actual} === ${expected} `)
  }
}

//assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 7);