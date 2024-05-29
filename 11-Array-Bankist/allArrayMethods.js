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
/* 3rd Method: pop() method remove element from end of an array */
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

// arr.splice(1, 2);
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

/* 8th Method: fill() method is used to fills a specific elements in anararray */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// arr.fill("michel", 2, 3);
// console.log(arr);

/* This method return new array */
/* 9th Method: map() method is creating a new array by calling a function on eavery element if the original array and return result in new array */
// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const output = arr.map((curr) => curr * 2);
// console.log(output);

/* 10th Method: filter() method is used to filled with elements that pass a condition provided by the function and return result in new array */
// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const output = arr.filter((curr) => curr < 0); // this gives elemnet which is smaller then 0
// console.log(output);

/* 11th Method: slice() method is used to extract a part of string and store it into a new variable and return new array */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// const output = arr.slice(2, 5);
// console.log(output);

/* 12th Method: concat() method is used to combine two or more string */
/* Examle 1 combine one array */
// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["e", "f", "g", "h"];
// const output = arr1.concat(arr2);
// console.log(output);

/* Example 2 cobimne two array */
// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["e", "f", "g", "h"];
// const arr3 = ["i", "j", "k", "l"];
// const output = arr1.concat(arr2, arr3);
// console.log(output);

/* 13th Method: flat() method is used to flattening the nested array into a single new array. It.s takes one parameter which is depth parameter depth parameter means number of nested loop which is written as a parameter */
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

/* 14th Method: flatMap() method can be used as a way to add and remove items (modify the number fo items) during a map it takes three parameter current value , index, array*/
/* Example 1 */
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
// const a = [5, 4, -3, 20, 17, -33, -4, 18];
// //         |\  \  x   |  | \   x   x   |
// //        [4,1, 4,   20, 16, 1,       18]

// const result = a.flatMap((n) => {
//   if (n < 0) {
//     return [];
//   }
//   return n % 2 === 0 ? [n] : [n - 1, 1];
// });
// console.log(result); // [4, 1, 4, 20, 16, 1, 18]

/* Example 2 */
// const arr = [[200, 450], -400, [3000, -650], -130, [70, 1300]];
// const output = arr.flatMap((el) =>
//   Array.isArray(el) ? el.map((num) => num * 2) : el * 2
// );
// console.log(output);

/* This methods to find index of element */
/* 15th Method: indexOf() method is used to find the index of element */
// const arr = ["bob", "steven", "john", "sam", "archi", "samridhi"];
// const output = arr.indexOf("john");
// console.log(output);

/* 16th Method: findIndex() method is an iterative method. It calls a provided callback function once for each element on an array in ascending-index order, until callback function returns a truthy value */
// const array1 = [5, 12, 8, 130, 44];
// const output = array1.findIndex((el) => el > 13);
// console.log(`Element which is greater then 13 at index ${output}`);
