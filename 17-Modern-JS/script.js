// Importing module
/* Here we access specific function using this 👇 syntax */

// import { addToCart, totalPrice as Price, tq } from "./shoppingCart.js";;
// addToCart("bread", 5);
// console.log(Price, tq);
console.log("Importing module");

/* Here we access whole module using this 👇 syntax */
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, cart } from "./shoppingCart.js"; // this is a mix of default import or named import
// addToCart("pizza", 2);
// addToCart("bread", 5);
// addToCart("apples", 4);

// console.log(cart);

// Top-level await
// in Es2022 update we use await keyword without async function like this 👇
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
