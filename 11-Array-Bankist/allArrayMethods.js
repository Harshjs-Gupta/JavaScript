"use strict";
/* Add element an array */
/* 1st Method: push() method add one or more elements at the end of an array*/
/* Example 1 add one element */
// const arr = ["bob", "steven", "john", "sam", "archi"];
// arr.push("samridhi");
// console.log(arr);

/* Example 2 add one or more elements */
// arr.push("samridhi","daivd");
// console.log(arr);

/* 2nd Method: unshift() method add one or more elements at the begnning of an array*/
/* Exmple 1 add one element */
// arr.unshift("jessica");
// console.log(arr);

/* Example 2 add one or more elements */
// arr.unshift("jessica", "david");
// console.log(arr);

////////////////////////////////////////
/* Remove elements from a array */
/* 3rd Method: pop() method remove element from end of an array*/
// const arr = ["bob", "steven", "john", "sam", "archi"];
// arr.pop();
// console.log(arr);

/* 4th Method: shift() method remove element from begnning of an array*/
// arr.shift();
// console.log(arr);

/* 5th Method: splice() method is used to remove, replace and insert element from any index of an array*/
// const elementToRemove = ["steven", "john"];
// elementToRemove.forEach(function (el) {
//   const index = arr.indexOf(el);
//   if (index > -1) {
//     arr.splice(index, 2);
//   }
// });
// console.log(arr);

/* here we insert element */
// arr.splice(2, 0, "samridhi");
// console.log(arr);

//////////////////////////////////////////
/* Other reverse() , sort() ,fill() */
/* 6th Method: reverse() method */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
/* Example 1 normal reverse */
// arr.reverse();
// console.log(arr);

/* Example 2 reverse a specific part */
// let start = 2; // starting index
// let end = 4;  // ending index
// // extract and reverse an specific part
// let reversePart = arr.slice(2, 4 + 1).reverse();
// // Replace the original part with reverse part
// arr.splice(start, reversePart.length, ...reversePart);
// console.log(arr);

/* 7th Method: sort() method is used to sort an array*/
// console.log(arr.sort());

/* 8th Method: fill() method fills specified elements in an array with a value.*/
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// arr.fill("jessica", 2, 4);
// console.log(arr);

////////////////////////////////////////////
/* A new Array */
/* 9th Method: map() method is used to return a new array based on it function condition */
/* Example 1 */
// const arr = [2, 4, 6, 8, 10];
// const output = arr.map((curr) => curr * 2);
// console.log(output);

/* Example 2*/
/* Q. Given an array of objects users, print user of particular age along with their frequency.*/
// const users = [
//   { firstName: "john", lastName: "Biden", age: 26 },
//   { firstName: "jimmy", lastName: "cob", age: 75 },
//   { firstName: "sam", lastName: "lewis", age: 50 },
//   { firstName: "Ronald", lastName: "Mathew", age: 26 },
// ];

// const output = users.map((name) => name.firstName);
// console.log(output);

/* 10th Method: filter() method is use to create a new array fill with element that pass a condition provided by function */
/* Example 1 */
// const arr = [2, 4, 6, 8, 10];
// const output = arr.filter((curr) => curr > 5);
// console.log(output);

/* Example 2 */
// const users = [
//   { firstName: "elon", lastName: "musk", age: 26 },
//   { firstName: "samridhi", lastName: "das", age: 18 },
//   { firstName: "harsh", lastName: "gupta", age: 20 },
//   { firstName: "donald", lastName: "trump", age: 26 },
// ];
// const output1 = users
//   .filter((curr) => ("trum" === curr.lastName ? curr.firstName : `NULL`))
//   .map((name) => name.firstName);
// console.log(output1);
// const output2 = users
//   .filter((curr) => curr.age < 25)
//   .map((name) => name.firstName);
// console.log(output2);

/* 11th Method: slice() method use to extract a part of string and its return a new string with extract part */
/* Example 1 */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// const output1 = arr.slice(2);
// console.log(output1);
// /* Example 2 extract a specific part of an array */
// const output2 = arr.slice(1, 5);
// console.log(output2); //["steven", "john", "sam", "archi"]

/* 12th Method: concat() method is use to adding two array */
/* Example 1 */
// const arr1 = ["bob", "steven", "archi"];
// const arr2 = ["sam", "john", "samridhi"];
// const output = arr1.concat(arr2);
// console.log(output);

/* Example 2 */
// const arr1 = ["bob", "steven", "archi"];
// const arr2 = ["sam", "john", "samridhi"];
// const arr3 = ["harsh", "michel","donal"];
// const output = arr1.concat(arr2);
// console.log(output);

/* 13th Method: flat() method is used to flatten the nested array into one single new array and flat method take one parameter which is depth parameter depth means hwo many nested array in on array*/
/* Example 1 */
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const output = arr.flat();
// console.log(output);

/* Example 2 */
// const arr = [
//   [[1, 2], 3],
//   [4, [5, 6]],
// ];
// const output = arr.flat(2);
// console.log(output);
