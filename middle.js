
/*
const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length && actual.every((element, index)=>element === expected[index])) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};



assertArraysEqual(head([5,6,7]), 5);
assertArraysEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/

const middle = function (arr) {
  const result = [];
  if (arr.length %2 ==1) {
    result = arr[ Int(arr.length/2) ];
  } else {
    result = arr.slice((arr.length/2), arr.length/2+1);
  }
return result;
}

console.log(middle([1, 2, 3, 4])) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]