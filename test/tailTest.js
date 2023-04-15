
const assertArraysEqual = require ('../assertArraysEqual')
const tail = require ('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result);
assertArraysEqual(result, ["Lighthouse", "Labs"]);