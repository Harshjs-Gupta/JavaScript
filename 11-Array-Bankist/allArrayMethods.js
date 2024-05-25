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

/* Other Method */
/* 6th method: reverse() method is used to reverse an array element */
/* Example 1 here we reverse the entire array */
// const arr = ["a", "b", "c", "d", "e"];
// arr.reverse();
// console.log(arr);

/* Example 2 here we reverse a specific part of array*/
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// let start = 2;
// let end = 4;
// const reversePart = arr.slice(2, 4 + 1).reverse();
// arr.splice(start, reversePart.length, ...reversePart);
// console.log(arr);

/* 7th method: sort() method is used to sort an array in alphabetical form and ascending or descending order */
/* Example 1 here we sort an array in alphabetical form */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// arr.sort();
// console.log(arr);

/* Example 2 here we sort an array in ascending order */
// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// arr.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(arr);
