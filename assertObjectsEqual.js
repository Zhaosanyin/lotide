// const assertEqual = function(actual, expected) {
//   if (actual == expected) {
//     return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
//   } else {
//     return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
//   }
// };

// const assertObjectsEqual = function(actual, expected) {
  // const inspect = require('util').inspect; // <= add this line
  // ...

const assertObjectsEqual = function (objects1, objects2) {
  const inspect = require('util').inspect;
  console.log(`Example label1: ${inspect(objects1)}`);
  console.log(`Example label2: ${inspect(objects2)}`);

  const keys1 = Object.keys(objects1);
  const keys2 = Object.keys(objects2);
  const values1 = Object.values(objects1);
  const values2 = Object.values (objects2);

if(typeof objects1 !== typeof objects2) {
  return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + objects1 + " !=== " + objects2));
}

if (keys1.length !== keys2.length) {
  return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + objects1 + " !=== " + objects2));
}

if (values1.length !== values2.length) {
  return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + objects1 + " !=== " + objects2));
}

keys1.sort();
keys2.sort();
values1.sort();
values2.sort();

for (let i =0; i<= keys1.length; i++){
  if(keys1[i]!==keys2[i]){
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + objects1 + " !=== " + objects2));
  }
}

for (let j=0; j <=values1.length; j++){
  if(values1[j]!==values2[j]){
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + objects1 + " !=== " + objects2));
  }

}

return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + objects1 + " === " + objects2));
  
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


// console.log(eqObjects(shirtObject , anotherShirtObject));

assertObjectsEqual(shirtObject, anotherShirtObject);