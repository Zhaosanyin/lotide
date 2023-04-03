const lettersPosition = function(str) {
  const results = {};
  let indexS = 0;
  for (let c of str) {
    if (c !== " ") {
      if (results[c]) {
        results[c].push(indexS);
      } else {
        results[c] = [indexS];
      }
    }
    indexS ++;
  }
  return results;
};

console.log(lettersPosition("zhaosanyin ottawa"));