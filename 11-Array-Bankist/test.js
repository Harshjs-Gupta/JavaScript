const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = array.map((curr) => {
  if (curr % 2 === 0) {
    return curr * 2;
  } else {
    return curr * 3;
  }
});
console.log(output);
const output2 = output.filter((val) => val % 2 === 0);
console.log(output2);
// const output3 = output2.sort((val1, val2) => val1 < val2);
// console.log(output3);

// const num1 = "2";
// const num2 = 2;
// console.log(num1 === num2);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output4 = arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc));
console.log(output4);
