
// const assertEqual = require ('../assertEqual');
//  const head = require ('../head');


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 7);

//  assertEqual(head([5,6,7]),5);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

it("returns '' for ['']", () => {
  assert.strictEqual(head(['']), '1'); 
});
