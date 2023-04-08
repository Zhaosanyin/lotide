const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};

const findKey = function (obj, callback) {

  for (let key in obj) {
    if (callback(obj[key])) {   //it is no easy to understand why using it to judgement
      return key;
    }
  }  return undefined;
}

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result1);
assertEqual(result1, "noma");
