// // // const array = [1, 2, 3]
// // // let array2 = array;
// // // array2.push(4);

// // function sayhello () {
// //   console.log("hello world");
// // }

// // // console.log(array);
// // // console.log(array2);
// // console.log(sayhello);
// // someFunc = sayhello;
// // console.log(someFunc);

// // // the console has different display from the terminal. why?
// // ```
// // console:
// // ƒ sayhello () { 
// // console.log("hello world");

// // terminal:
// // [function: sayHello]
// // ```


// // array1 = [1,2,3,4];
// // console.log(array1);

// // 下面的函数有问题，但是引用在函数中就可以？ 这个解决了。看chatgpt
// // function() {
// //   console.log("hello");
// // }
// // const runMyFunction = function (callback) {
// //   console.log("hello good morning");
// //   callback();
// //   console.log("hello good afternoon");
// // }

// // runMyFunction (function(){
// //   console.log("hello good lunch");
// // })

// // toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
// // toCountKey = Object.keys(toCount);
// // console.log(toCountKey);


// function countItems (arr) {
//   const counts = {};
//   for (const item of arr) {
//     if (counts[item]) {
//       counts[item] ++ ;
//     }else {
//       counts[item] =1;
//     }
//   }
//   return counts;
// }

function analyzeString(str) {
  let charCount = {};
  let charPositions = {};
  let index = 0;
  for (let c of str) {
    if (c !== ' ') {
      if (charCount[c]) {
        charCount[c]++;
      } else {
        charCount[c] = 1;
      }
      if (charPositions[c]) {
        charPositions[c].push(index);
      } else {
        charPositions[c] = [index];
      }
    }
    index++;
  }
  return { charCount: charCount, charPositions: charPositions };
}

 console.log(analyzeString("zhaosanyin"));

