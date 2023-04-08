// function sumToOne (n){
//   let sum = 0;
//   for (let i =n; i>= 1; n--) {
//     sum+=i;
//   }
//   return sum;
// }

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



const findWaldo = function(names, callback) {
  names.forEach((index, items) => {
    if (index ==="Waldo") {
      callback(items);
    }
  })
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"],function(items){ 
  console.log(`Found him at ${items}!`) });





