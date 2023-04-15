
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


const middle = function (arr) {
  const result = [];
  if (arr.length %2 ==1) {
    result = arr[ Int(arr.length/2) ];
  } else {
    result = arr.slice((arr.length/2), arr.length/2+2);
  }
return result;
}
*/

function middle(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    // 如果数组长度为奇数，取中间一个元素
    return arr.slice(middleIndex, middleIndex + 1);
  } else {
    // 如果数组长度为偶数，取中间两个元素
    return arr.slice(middleIndex - 1, middleIndex + 1);
  }
}

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5, 6];

// console.log(middle(arr1)); // [3]
// console.log(middle(arr2)); // [3, 4]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


module.exports = middle;