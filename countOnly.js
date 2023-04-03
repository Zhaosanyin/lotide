


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
//   } else {
//     return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
//   }
// };

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  allItems.forEach(str => {
    const filtered = itemsToCount.filter(elem => elem === str);
    const conut = filtered.length;
    results[str] = (results [str] || 0) + conut;
  });
  return results;
};

// && results [items]== itemsToCount[items]
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
const toCountKey = Object.keys(toCount);


console.log(countOnly(firstNames, toCountKey));


//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);