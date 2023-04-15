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


// class Pizza {

//   constructor() {
//     this.topping = ["cheese"];
//   }
//   addTopping(topping) {
//     this.topping.push(topping);
//   }
// }

// const p1 = new pizza;
// console.log(p1);

// class SomeClass {
//   methodName(parameters) {
//     this.hello = 'hi';
//   }
// }



// let pizza1 = new Pizza();
// console.log(pizza1.topping);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.topping);

// const pizza1 = {
//   toppings: ['cheese'],
//   addTopping: function(topping){
//     this.topping.push(topping);
//   }
// }

// const pizza2 = {
// topping: ['cheese'],
// addTopping: function(topping){
//   this.topping.push(topping);
// }
// }

// class Student {
//   // this constructor is identical to that of a mentor!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // here is a method that is specific to students
//   enroll(cohort) {
//     this.cohort = cohort;
//   }

//   // identical! Smells of code duplication
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// class Mentor {
//   // this constructor is identical to that of a student!
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }

//   // specific to mentors
//   goOnShift() {
//     this.onShift = true;
//   }

//   // specific to mentors
//   goOffShift() {
//     this.onShift = false;
//   }

//   // identical! Smells of code duplication
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// class Person {
//   constructor (name, quikyFact) {
//     this.name = name;
//     this.quikyFact = quikyFact;
//   }
//   Bio() {
//     return `My name is ${this.name} and here's my quiky fact: ${this.quirkyFact}`;
//   }
// }

// class Student extends Person {
//   enroll(corhort) {
//     this.corhort = corhort;
//   }
// }

// class Mentor extends Person {
//   goOnShift(){
//     this.goOnShift = true;
//   }
//   goOffShift(){
//     this.goOffShift = false;
//   }

// }

// now there is general

// class Pizza {
//   constructor() {
//     this.topping = ["cheese"];
//   }
  
//   addTopping(topping) {
//     this.topping.push(topping);
//   }
// }

// class SpecialPizza extends Pizza {
//   constructor() {
//     super();
//     super.topping = ["mushrooms"]; // 更改 super 的 topping 属性
//   }
// }

// const mySpecialPizza = new SpecialPizza();
// mySpecialPizza.addTopping("sausage");
// console.log(mySpecialPizza);


class Pizza {

  constructor(){
    this.toppings = "";
  }
}

let pizza = new Pizza ();

pizza.toppings = pizza.toppings + 'cheese';
pizza.toppings = pizza.toppingss + ", mushrooms";

