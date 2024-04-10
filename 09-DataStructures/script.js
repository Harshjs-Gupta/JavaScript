"use strict ";
/* Enhanced Object Literals */
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "classio Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza ", "Pasta", "Risotto"],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious  pasta with the following ingredients like ${ing1} , ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIndredients) {
    console.log(mainIngredient);
    console.log(otherIndredients);
  },
};

////////////////////////////////////////
/* Destructuring Objects */

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// this is how we call the function  with the object as parameter and destructure it inside the function and, when we call and does not pass any parameter by chance then they also access it because its default value set in the function
// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

/*this is how we access  the properties of an object using destructuring assignment in JavaScript*/
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

/* This is how we rename  the properties while extracting them from an object*/
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

/* add new property in objects by assigning them default value or with some value*/
// const { main = [], starterMenu: starters = [] } = restaurant;
// console.log(main, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

////////////////////////////////////////
/*
////////////////////////////////////////
//Destructuring array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

const [x, y, z] = arr; //this is destructing array where we assign arr  values to x,y and z variables respectively and this is how we access property of objects .
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

*/

/* Switching variable  method  1*/

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

/* Switching variable method 2*/

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

/* Accessing function using destructuring array */

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//////////////////////////////////////////
/* The Spread operator(...) */
// const arr = [7, 8, 9];
/*Example1*/
/*this is  not the correct way to add new array and store old array in new array*/
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [1,2,7,8,9]

/*Example2*/
/*this is the way  we should use spread operator to add elements of one array into another array*/
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr); // [1,2,7,8,9]
// console.log(...goodNewArr); // 1,2,7,8,9

/*Example3*/
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu); // ['Pizza' , 'Pasta','Risotto' ,'Gnocci']
// console.log(...newMenu); //pizza Pasta Risotto Gnocci

/* copy array */
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

/* join two array */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

/* Example 4 */

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

/* assign new value in object usign spread operator  and we also use object.assign but spread operator is esay way to add more object*/
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Guiseppe",
// };
// console.log(newRestaurant);

/*copy restaurant  object */
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/* Rest Pattern and Parameter */
/* 1st part for destructuring */
/* Rest Operator in Array */
/* It is called SPREAD Operator, because (...) is use on right side of (=) assignment operator */
// const arr = [1, 2, ...[3, 4]];
// console.log(arr); //  [1, 2, 3,  4]

///////////////////////////////////////
/* Rest operator */
/* It is called REST Operator, because (...) is use on left side of (=) assignment operator */

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [3,  4, 5]

// const [Pizza, , Risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, othersFood); // Pizza Risotto ['Focaccia','Brushcetta','Garlic Bread','Caprese Salad']

/* 2nd part for Function */
/* Rest Operator in Objects */
/* Use of rest operator to pack the elements into an array */
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays); //{thu: {...},  fir: {...}}

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };
// add(2, 3); //5
// add(5, 3, 7, 2); //17
// add(8, 2, 5, 3, 2, 1, 4); //25

// const x = [23, 5, 7];
// add(...x);

/*How rest operator work in function  with parameters?*/
// restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
// restaurant.orderPizza("mushroom");

// const obj = { name: "John", age: 30, city: "New York" };
// const { name, ...info } = obj;
// console.log(`${name} is ${info.age} years old and lives in ${info.city}`); // John is undefined years old and lives in New
// console.log(name); // John
// console.log(info); // {age: 30, city: "New York"}

/////////////////////////////////////
/* Short Circuiting (&& and ||) */
/* ------------- OR --------------*/
// console.log(3 || "Harsh"); // 3
// console.log("" || "Harsh"); // Harsh
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || "" || "harsh" || 23 || null); // harsh

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
/* ---------------- && ---------------*/
// console.log(0 && "harsh"); //0
// console.log(7 && "harsh"); //harsh

// console.log("hello" && 23 && null && "harsh"); //null

// const result = true && 9 < 10 && "Harsh";
// console.log(result); // Harsh

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushroom", "Paneer");
// }

////////////////////////////////////
/* Nullish Coalescing operator (??) */
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/////////////////////////////////////
/* Logical Assignment Operators (!, ||, &&) */
// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };
// rest1.numGuests = rest1.numGuests || 10; //20
// rest2.numGuests = rest2.numGuests || 10; //10

/* OR assignment operator */
// rest1.numGuests ||= 10; //20
// rest2.numGuests ||= 10; //10

/* (??) Nullish assignment operator */
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

/* (&&) AND assignment operator */
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

////////////////////////////////////////
/* Looping Array: The for-of Loop */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
//              /\
//              |
//Insted of this we write like this
//              |
//             \/
// for (const [item, elements] of menu.entries()) {
//   console.log(`${item + 1}: ${elements}`);
// }

///////////////////////////////////////
/* Optional chaining */
// if (restaurant.openingHours && restaurant.openingHours.mon)
///////// Without opional chaining
// console.log(restaurant.openingHours.mon.open); // error
////////// With optional chaining
// console.log(restaurant.openingHours.mon?.open); // undefine

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   console.log(`On ${day} , we open at ${open}`);
// }

// /////Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // ['Focaccia', 'Pasta']
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method does not exist

///Array
// const user = [{ name: "Harsh", email: "hello@harsh.io" }];
// console.log(user[0]?.name ?? "User array empty"); // Harsh
// const users = [];
// console.log(users[0]?.name ?? "User array empty"); // User array empty

//////////////////////////////////////////////
/* Looping Objects: Object Keys,Values,and Entries */
/*Property NAME */
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// /* Property VALUES */
// const values = Object.values(openingHours);
// console.log(values);

// /* Entire Object */
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

////////////////////////////////////////
/* Sets */
/* Create a Set*/
// const letters = new Set(["a", "b", "c"]);
// console.log(letters);
/* Create a Set*/
// const letters = new Set();

// // Add Values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters);

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

// console.log(new Set("Harsh")); // Set(5) { 'H', 'a', 'r', 's', 'h' }

// console.log(ordersSet.size); // 3 //in array we write ordersSet.length but in set we write ordersSet.size

// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear(); //Delete all data
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// //Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)]; //Spread Operator use for make array
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("harsh").size); // this show the size of the set

////////////////////////////////////////
/* Maps */
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);
rest.set("open", 11);
rest.set("close", 23);
rest.set(true, "We are open :D");
rest.set(false, "We are closed :(");
