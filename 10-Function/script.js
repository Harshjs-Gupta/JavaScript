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
// greeterHey2("Harsh");
// greeterHey2("Bob");

// greet2("Hello")("Harsh");
//Example 2
const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet3("Hey")("Harsh");
////////////////////////////////////
