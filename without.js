

const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length && actual.every((element, index)=>element === expected[index])) {
    return (console.log(String.fromCodePoint('0x2705') + "Assertion Passed:" + actual + " === " + expected));
  } else {
    return (console.log(String.fromCodePoint('0x274c') + "Assertion failed:" + actual + " !=== " + expected));
  }
};

/*eqArray([1, 2, 3], [1, 2, 3]);

eqArray([1, 2, 3], [1, 2, 3]); // => true
eqArray([1, 2, 3], [3, 2, 1]); // => false

eqArray(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArray(["1", "2", "3"], ["1", "2", 3]); // => false

*/

function without(array1, array2) {
  const result = [];

  // 遍历第一个数组
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    // 检查第二个数组中是否存在该元素
    if (array2.indexOf(element) == -1) {
      // 如果存在，则将其添加到结果数组中
      result.push(element);
    }
  }

  // 返回结果数组
  return result;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);