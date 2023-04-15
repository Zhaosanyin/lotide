
// class Pizza {

//   constructor() {
//     this.topping = ["cheese"];
//   }
//   addTopping(topping) {
//     this.topping.push(topping);
//   }
// }

//下面的statement is wrong Xxxx

// Pizza.addTopping("sausage");
// console.log(Pizza);


//new concepts of subclass with key word "new"

// let pizza1 = new Pizza();
// console.log(pizza1.topping);
// pizza1.addTopping("mushroom");
// pizza1.addTopping("peppers");
// console.log(pizza1.topping);

// let pizza2 = new Pizza();
// console.log(pizza2.topping);
// pizza2.addTopping("more cheese");
// console.log(pizza2.topping);

// const pizza11 = {
//   toppings: ["cheese"],
//   addTopping: function(topping){
//     this.topping.push(topping);
//   }
// }
// const pizza22 = {
//   toppings: [cheese],
//   addTopping: function(topping){
//     this.addTopping.push(topping);
//   }
// }


class Pizza {
// added flour arguments in constructor
  constructor(size, crust, flour) {
    this.size = size;
    this.crust = crust;
    this.flour = flour;
    this.toppings = ["cheese"];
  }
  
  addTopping(topping) {
    this.toppings.push(topping);
  }
  
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    } else {
      return 'error';
    }
  }

  getSize() {
    return this.size;
  }

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);

  }

}
let myPizza = new Pizza("large", "thin", "wheat");
console.log(myPizza);
console.log(typeof myPizza);
const pizza = new Pizza();
pizza.setSize('w');
console.log(typeof pizza.setSize('w'));
pizza.getSize(); //undefined, since the size null.
console.log(pizza.getSize());
// pizza.getPrice()
console.log(pizza.getPrice());