"use strict";
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

/* Is the same as doing... */
// const flightNum = flight;
// const passenger = jonas;
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
// First-class and Higher-order functions
// Functions returning functions

///////////////////////////////////
/* First class and higher order function */
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

/* Higher-order function */
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

/* JS uses callbacks all the time */
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);

////////////////////////////////////
/* Function returning Function */
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Harsh");
// greeterHey("Bob");

// greet("Hello")("Harsh");

/* Arrow Function */
// Example 1
// const greet2 = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name} `);
//   };
// };

// const greeterHey2 = greet2("Hey");
// greeterHey2("Harsh"); // Hey Harsh
// greeterHey2("Bob");  // Hey Bob

// greet2("Hello")("Harsh"); // Hello Harsh
//Example 2
// const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet3("Hey")("Harsh"); // Hey Harsh

////////////////////////////////////
/* The call Method */
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Harsh");
// lufthansa.book(635, "Bob");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book; // book is a function

// // book(23, "Harsh"); // book is not a function

// // Call Method
// book.call(eurowings, 23, "Harsh");
// console.log(eurowings);

// book.call(lufthansa, 239, "Bob");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air line",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Harsh"); // Swiss Air line
// console.log(swiss); // Swiss Air line

// // Apply Method
// const flightData = [583, "Harsh"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData); // same as apply method but it is not used anymore

// // Bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookLX(23, "Harsh");
// bookLX(583, "Harsh");

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Harsh");

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();
// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///////////////////////////////////
/* Immediately Invoked Function expressions (IIFE) */

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
