"use strict";

const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1994, 2008, 2020, 2024);
// console.log(years);
// console.log(years[0], years[2], years[4]);

// console.log(friends[0], friends[2]);

// console.log(friends.length);

// friends[2] = "jay";
// console.log(friends);

const firstName = "Harsh";
const harsh = [firstName, "Gupta", "age", 2020 - 2002, friends];

console.log(harsh);

const calcAge = function (birthYear) {
  return 2030 - birthYear;
};

const year = [1990, 1967, 2008, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 1]),
];

console.log(ages);
