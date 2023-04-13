// function sumToOne (n){
//   let sum = 0;
//   for (let i =n; i>= 1; n--) {
//     sum+=i;
//   }
//   return sum;
// }

// const { sum } = require("lodash");

// console.log(sumToOne(4));

// // 0, 4, 4
// // 4, 3, 7
// // 7, 2, 9
// // 9, 1, 10

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 3));

// const args = process.argv.slice(2,4);
// const arg1 = args.map(Number);
// console.log(arg1.reduce(x,y) => x+y);

// console.assert(1===1.1);


// array.map(function); such as array.map(Number);  return a new array;
// array.reduce();



//_.head()
// const head = function (arr){
//   const _ = require('lodash');
//   return result = _.head(arr);
// }

// console.log(head("myname"));

// _.tail();

// let myVar = "global";

// const myFunction = function() {
//   let myVar = "local";

//   console.log("inside myFunction, myVar is:", myVar);
// }

// console.log(myFunction());

// console.log("outside myFunction, myVar is:", myVar);

// actual.length === expect.length && actual.every((element, index) => element === expect[index]);


// const myFn = function (){
//   console.log("I'm function");
// }

// myFn.someAttribute = 42;
// console.log (myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner (myFn);


// const findWaldo = function (names, found) {
//   for (let i =0; i <= names.length; i++){
//     let name = names[i];
//     if (name === "Waldo"){
//      found(i);
//     }
//   }
// }

// const actionWhenFund = function (i){
//   console.log( `Found him ${i+1}`);
// }


// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFund); //actionWhenFund () 不能带括号



// const findWaldo = function(names, callback) {
//   names.forEach((index, items) => {
//     if (index ==="Waldo") {
//       callback(items);
//     }
//   })
// }


// findWaldo(["Alice", "Bob", "Waldo", "Winston"],function(items){
//   console.log(`Found him at ${items}!`) });



// const sumOne = function(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//   return n + sumOne(n - 1);
// }
// };

// console.log(sumOne(100));

// 以下的示例是错误的❌的。
// 您的代码中有一个小问题，forEach() 方法没有返回值，所以您不能从 raisinAlarm() 函数内部返回值。
// 您需要使用 for...of 循环来遍历数组，然后使用条件语句来确定是否有葡萄干。

// 在函数中，如果没有使用 return 语句，函数就会默认返回 undefined 值，这个值表示函数没有返回任何值。
// 所以说一个没有返回值的函数，就是指在函数执行完成后不会返回任何有意义的值给调用者。

// 在这个例子中，return语句出现在forEach回调函数内部，而非raisinAlarm函数内部。这里的问题在于，
// forEach函数的回调函数不会返回任何值，所以即使在回调函数中使用了return语句，也不会对raisinAlarm函数的返回值产生影响。
// 因此，raisinAlarm函数的返回值会是默认值undefined，而不是预期的字符串。

// 如果想要实现这个函数的功能，可以考虑使用for...of循环代替forEach方法，或者使用Array.some()方法。



const raisinAlarm = function(cookie) {

  // Put your solution here
 cookie.forEach((element) => {
  if(element ==="🍇" ) {
    return `Raisin alert!`;
  }
  return `All good!`;
  
});

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
