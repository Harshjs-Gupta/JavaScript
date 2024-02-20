"use strict";
/* here we know how to write for loop in javascript*/

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }

/* Looping Arrays, Breaking and continuing*/

// const harsh = [
//   "harsh",
//   "gupta",
//   2030 - 2019,
//   "student ",
//   ["Michale", "Peter", "Steven"],
// ];

// const type = [];

// for (let i = 0; i < 5; i++) {
//   console.log(harsh[i]);

//   type.push(typeof harsh[i]);
// }
// console.log(type);

// const years = [1991, 2007, 1969, 2020];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i]);
// }
// console.log(age);

//Continue and break statement
// const harsh = [
//   "Harsh",
//   "Gupta",
//   2030 - 2019,
//   "student ",
//   ["Michale", "Peter", "Steven"],
// ];

// for (let i = 0; i < harsh.length; i++) {
//   if (typeof harsh[i] !== "string") {
//     continue;
//   }
//   console.log(harsh[i]);
// }

// const harsh = [
//   "Harsh",
//   "Gupta",
//   2030 - 2019,
//   "student ",
//   ["Michale", "Peter", "Steven"],
// ];

// for (let i = 0; i < harsh.length; i++) {
//   if (typeof harsh[i] === "number") {
//     break;
//   }
//   console.log(harsh[i]);
// }

/* Looping backward and Loops in Loops*/
// const harsh = [
//   "harsh",
//   "gupta",
//   2030 - 2019,
//   "student ",
//   ["Michale", "Peter", "Steven"],
// ];

// for (let i = harsh.length - 1; i >= 0; i--) {
//   console.log(harsh[i]);
// }

for (let i = 1; i <= 3; i++) {
  console.log(`---------starting exercise ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Exercise ${i}: Lifting weight repetition ${j} 🏋️`);
  }
}
