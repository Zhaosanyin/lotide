


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};


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

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const itemToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };


console.log(countOnly(firstNames, itemToCount));


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);








//the below is the code what i think too much. keep for record!!



// const countOnly = function(allItems, itemsToCount) {
//   const results = {};
//   allItems.forEach(str => {
//     const filtered = itemsToCount.filter(elem => elem === str);
//     const conut = filtered.length;
//     results[str] = (results [str] || 0) + conut;
//   });
//   return results;
// };

// && results [items]== itemsToCount[items]