"use strict";

/* function calcAge(birthyear) {
  const age = 2024 - birthyear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);
    if (birthyear >= 2000 && birthyear <= 2013) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}
const firstName = "Harsh";
calcAge(2004); */

// console.log(birthyear);

// var me = "harsh";
// let work = "student";
// const birthyear = 1991;

//Concept of hoisting

/*console.log(myVar); // undefined
var myVar = "Hello, var!";
console.log(myVar); // Hello, var!

var myVar; // declaration is hoisted to the top
console.log(myVar); // undefined
myVar = "Hello, var!";
console.log(myVar); // Hello, var!*/

/* this keyword */
// console.log(this);

/*const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};

calcAgeArrow(1980);

const harsh = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

harsh.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = harsh.calcAge; // here we copy the object function  from harsh to matilda
matilda.calcAge(); */

// const harsh = {
//   firstName: "harsh",
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     //solution 1
//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     // const isMillenial = () => {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// harsh.calcAge();

/* argument keyword*/
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5, 6, 8); //normal function have access to the argument passed to the function ,because its own arguments keyword.

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(4, 7, 5); //but arrow function does't have its own arguments

/* Primitives types*/
// let age = 30;
// let oldage = age;
// age = 31;
// console.log(age); //31
// console.log(oldage); //30

/*Objects types*/

// const me = {
//   name: "harsh",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log("Friend:", friend);
// console.log("Me : ", me);

/* Primitives types */

// let lastName = "william";
// let oldLastName = lastName;
// lastName = "davis";
// console.log(lastName);
// console.log(oldLastName);

/* Objects types */

// const jessica = {
//   firstName: "jessica",
//   lastName: "william",
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "davis";
// console.log("Before marriage: ", jessica);
// console.log("After marriage: ", marriedJessica);

/* Copying  objects using assign methods */

// const jessica2 = {
//   firstName: "jessica",
//   lastName: "william",
//   age: 27,
//   // family: ["Alica", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "davis";
// // jessicaCopy.family.push("Mike", "John");
// console.log("Before copy: ", jessica2);
// console.log("After copy: ", jessicaCopy);
