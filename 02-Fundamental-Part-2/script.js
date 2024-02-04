"use strict";

/* example of strict mode*/

// let hasDriversLicense = false ;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive 😊");

// function logger() {
//   console.log("My name is harsh 😊");
// }
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples 🍎 and ${oranges} oranges 🍊`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

/* Function declaration*/

// function calcAge1(birthYear) {
//   return 2030 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

/* Functuion expression*/

// const calcAge2 = function (birthYear) {
//   return 2030 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

/*Arrow function */
// const calcAge3 = (birthYear) => 2030 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

/* Functon calling Other function*/

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple🍎 and ${orangePieces} pieces of orange 🍊`;
//   return juice;
// };
// console.log(fruitProcessor(2, 3));
