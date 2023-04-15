
// const assertArraysEqual = require ('../assertArraysEqual')
// const tail = require ('../tail')

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result);
// assertArraysEqual(result, ["Lighthouse", "Labs"]);



const assert = require('chai').assert;
const tail = require ('../tail')
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns tail result array same as array lighthouse and lab", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});