"use strict";
/* here we know how to write for loop in javascript*/

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }

/* Looping Arrays, Breaking and continuing*/

const harsh = [
  "harsh",
  "gupta",
  2030 - 2019,
  "student ",
  ["Michale", "Peter", "Steven"],
];

const type = [];

for (let i = 0; i < 5; i++) {
  console.log(harsh[i]);

  type.push(typeof harsh[i]);
}

console.log(type);
