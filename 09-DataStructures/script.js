"use strict ";

const restaurant = {
  name: "classio Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza ", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

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
// add(5, 3, 7, 2); //[5,3,7,2]
// add(8, 2, 5, 3, 2, 1, 4); //[8,2,5,3,2,1,4]

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
