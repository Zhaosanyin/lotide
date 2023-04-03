const lettersPosition = function(str) {
  const results = {};
  let indexS = 0;
  for (let c of str) {
    if (c !== " ") {   //c!== " ", 这个判断空格
      if (results[c]) {   //result[c], 判断字符的同时，也是当作计数单位1， result[c] = result[key] 
        results[c].push(indexS);  // push位置信息到results[index]
      } else {
        results[c] = [indexS]; //[indexS] ???? why should has a [ ]. 
      }
    }
    indexS ++;
  }
  return results;
};

console.log(lettersPosition("zhaosanyin ottawa"));