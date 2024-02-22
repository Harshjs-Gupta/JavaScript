"use strict";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1994, 2008, 2020, 2024);
// console.log(years);
// console.log(years[0], years[2], years[4]);

// console.log(friends[0], friends[2]);

// console.log(friends.length);

// friends[2] = "jay";
// console.log(friends);

// const firstName = "Harsh";
// const harsh = [firstName, "Gupta", "age", 2020 - 2002, friends];

// console.log(harsh);

// const calcAge = function (birthYear) {
//   return 2030 - birthYear;
// };

// const year = [1990, 1967, 2008, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[year.length - 1]),
// ];

// console.log(ages);

/* Basic of array operation */

//Add elements
// const friends = ["Michale", "Steven", "Peter"];
// friends.push("Jay");
// console.log(friends);
// console.log(friends.length);

// friends.unshift("John");
// console.log(friends);
// console.log(friends.length);

// //Remove elements for an array

// const popped = friends.pop();
// console.log(popped); // jay
// console.log(friends);

// friends.shift(); // popped from begnning
// console.log(friends);

// console.log(friends.indexOf("Steven")); // indexOf is use to    know the index of element
// console.log(friends.includes("Steven"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

/* Introduction to0 objects*/

// const harsh = {
//   firstName: "Harsh",
//   lastName: "Gupta",
//   age: 2037 - 2004,
//   work: "student",
//   friends: ["Michael", "Peter", "steven"],
// };

// console.log(harsh);

/* Dot VS Bracket notation*/

// const harsh = {
//   firstName: "Harsh",
//   lastName: "Gupta",
//   age: 2023 - 2004,
//   work: "student",
//   friends: ["Michael", "Peter", "steven"],
// };

// console;
// console.log(harsh.firstName);
// console.log(harsh["lastName"]);

// const interestedIn = prompt(
//   "what do you want to known anout Harsh? Choose between firstName,lastName,age,work and friends"
// );

// console.log(harsh[interestedIn]);

// console.log(
//   `${harsh.firstName} has ${harsh.friends.length} friends, and his best friends is called ${harsh.friends[0]}`
// );

/* Object Method*/

// const harsh = {
//   firstName: "Harsh",
//   lastName: "Gupta",
//   birthYear: 2019,
//   work: "student",
//   friends: ["Michael", "Peter", "steven"],
//   hasDriverLicense: true,
// this function is not a regular function it's a property of the harsh object
// calcAge: function (birthYear) {
//   return 2030 - birthYear;
// },

// calcAge: function () {
//   return 2030 - this.birthYear;
// },

// calcAge: function () {
//   this.age = 2030 - this.birthYear;
//   return this.age;
// },

// getSummary: function () {
//   return `${harsh.firstName} is a ${harsh.calcAge()}-year old ${
//     harsh.work
//   }, and he has ${
//     harsh.hasDriverLicense == true ? "a" : "no"
//   } driver's license
//   `;
// },
// };

// console.log(harsh.calcAge(harsh.birthYear));
// console.log(harsh.calcAge(2019)); //here dot notation is use
// console.log(harsh["calcAge"](2019)); //bracket notation use
// console.log(harsh.calcAge());
// console.log(harsh.calcAge());
// console.log(harsh.age);

// console.log(harsh.getSummary());
