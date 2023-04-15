
// const middle = require ('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5, 6];
// const arr3 = [1, 2, 3, 4];


// console.log(middle(arr1)); // [3]
// console.log(middle(arr2)); // [3, 4]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// assertArraysEqual(middle(arr1), [3]);
// assertArraysEqual(middle(arr2), [3, 4]);
// assertArraysEqual(middle(arr3), [2, 3]);


const assert = require('chai').assert;
const middle = require ('../middle');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4];


describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle(arr1), [3]);
  });
});

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle(arr2), [3, 4]);
  });
});

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle(arr3), [2, 3]);
  });
});