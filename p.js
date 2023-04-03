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

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const myTest = function (arr) {
//   for (let c in arr){
//     if(arr[c]){
//       console.log(arr[c]);
//     }
//   }

// }

// console.log(myTest(firstNames));
// console.log(firstNames[0]);
// console.log(firstNames.Karl);


