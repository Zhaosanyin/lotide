// // const array = [1, 2, 3]
// // let array2 = array;
// // array2.push(4);

// function sayhello () {
//   console.log("hello world");
// }

// // console.log(array);
// // console.log(array2);
// console.log(sayhello);
// someFunc = sayhello;
// console.log(someFunc);

// // the console has different display from the terminal. why?
// ```
// console:
// ƒ sayhello () { 
// console.log("hello world");

// terminal:
// [function: sayHello]
// ```


// array1 = [1,2,3,4];
// console.log(array1);

// 下面的函数有问题，但是引用在函数中就可以？
// function() {
//   console.log("hello");
// }
const runMyFunction = function (callback) {
  console.log("hello good morning");
  callback();
  console.log("hello good afternoon");
}

runMyFunction (function(){
  console.log("hello good lunch");
})