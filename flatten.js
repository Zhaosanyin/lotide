
/*
const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length && actual.every((element, index)=>element === expected[index])) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};
*/

// 递归的使用，还不是很清楚。

//https://www.bilibili.com/video/BV194411f71o/?spm_id_from=333.788.recommend_more_video.0
const flatten = function (arr1){
const result = [];
for (let i =0; i<= arr1.length-1; i++){
  if (typeof arr1[i] == "object") {
    result.push (...flatten(arr1[i])) //result = result.concat(flatten(arr[i]));
  } else {
      result.push(arr1[i])
  }
}
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))