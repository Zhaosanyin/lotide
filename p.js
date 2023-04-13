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



// const myFn = function (){
//   console.log("I am function");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);

// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found();   // execute callback
//       console.log(` fund at ${i}`);
//     }
//   }
// }

// const actionWhenFound = function() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// const sayHello = function (name){
//   return "Hello," + name + "!"
// };

// console.log(
// 'sayHello() output: ',
//  sayHello()

//  );

// let expected = "Hello, Luis!";
// let actual = sayHello ('Luis');

// console.log(
//   'expected:', expected,
//   'acutal:' , actual,
//   'pass?', expected === actual
// );


// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const even = numbers.filter(function(num) {
//   return num %2 === 0;
// })
// console.log(" subset of even numbers: ", even);

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// // DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// // for now, let's just make sure we see our tasks
// console.log(tasks);

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// // marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// // console.log(tasks);


class Pizza {

  constructor() {
    this.topping = ["cheese"];
  }
  addTopping(topping) {
    this.topping.push(topping);
  }
}
// const p1 = new pizza;
// console.log(p1);

// class SomeClass {
//   methodName(parameters) {
//     this.hello = 'hi';
//   }
// }



let pizza1 = new Pizza();
console.log(pizza1.topping);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.topping);

