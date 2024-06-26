"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = " ";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const loss = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(loss)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, inte) => acc + inte, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

//Event Listener
const UpdateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Dispaly balance
  calcPrintBalance(acc);
  0;

  // Display Summary
  calcDisplaySummary(acc);
};

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
  }

  UpdateUI(currentAccount);

  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    UpdateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    UpdateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = " ";
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* simple array method */
// let arr = ["a", "b", "c", "d", "e"];

/* SLICE */
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

/* SPLICE */
// console.log(arr.splice(2));
// arr.splice(-1); // delete last elements from an array using splice
// console.log(arr); // [ 'a', 'b', 'c', 'd' ]
// arr.splice(1, 2);
// console.log(arr);

/* REVERSE */
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

/* CONCAT */
// const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

/* JOIN */
// console.log(letter.join(" - "));
// console.log(letter);

///////////////////////////////////////
/* The nwe AT method */
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); // this is new method using at method

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log("harsh".at(0)); //at method is also work on string
// console.log("harsh".at(-1));

///////////////////////////////////////
/* Looping Arrays: forEach */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("---- FOREACH ----");

// // movements.forEach(function (movement) {
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

///////////////////////////////////
/* forEach with Maps and Sets */

/* Maps */
// const currencies = [
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ];

// const curr = currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// console.log(curr); // undefined
// const cur = currencies.forEach().map(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// console.log(cur); // undefined

// const arr = [1, 2, 4, 5, 6];
// const arr2 = [];
// const calc = arr.filter((cal) => {
//   return arr2.push(cal * 2);
// });
// console.log(arr2);

// /* Sets */
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

//////////////////////////////////////////
/* Data Transformation: map, filter, reduce */
/* Maps */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Arrow function
// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

////////////////////////////////
/* The filter Method */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

// const withdrawal = movements.filter((mov) => mov < 0);
// console.log(withdrawal);

// const users = [
//   { firstName: "harsh", lastName: "gupta", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deppika", lastName: "padukone", age: 26 },
// ];

// const output = users.filter((a) => a.age < 30).map((first) => first.firstName);
// console.log(output);

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(output);

// const arr = [1, 2, 3, 4, 5, 3, 1, 2, 4, 5];
// const uniqueElements = arr.filter((element, index, array) => {
//   // Check if the index of the current element is the same as its first occurrence index
//   return array.indexOf(element) === index;
// });
// console.log(uniqueElements);

///////////////////////////////////////////
/* The reduce Method */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur) {
//   return acc + cur;
// }, 0);
// console.log(balance);

// // Arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
// const maximumMovements = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(maximumMovements);

// const users = [
//   { firstName: "harsh", lastName: "gupta", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deppika", lastName: "padukone", age: 26 },
// ];

//{26 :2, 75: 1, 50: 1}
// const countAge = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(countAge);

///////////////////////////////////////////
/* The Magic Of Changing Method */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

////////////////////////////////////////
/* The find method */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

//////////////////////////////////////////
/* Some and Every */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

/* EQUALITY */
// console.log(movements.includes(-130));

/* SOME: CONDITION */
// console.log(movements.some((mov) => mov === -130));

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

//EVERY: CONDITION
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

/////////////////////////////////////////
/* flat and flatMap */
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

/* flat */
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

/* flatMap */
// const overallBalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance2);

/////////////////////////////////////////
/* Sorting Arrays */

//String
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// Ascending
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //  console.log(movements);
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// //Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements);

//Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

// //Descending

// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////////////////////////////
/* More Ways of Creating and Filling Arrays */

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// //Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// const harsh = {
//   firstName: "harsh",
//   lastName: "gupta",
//   work: "dtudent",
//   friends: ["bob", "steven", "jonas"],
//   detail: function () {
//     return `${this.firstName} ${this.lastName} is a ${this.work} and he has ${this}`;
//   },
// };
// // console.log(this);
// console.log(harsh.detail());

// const person = {
//   name: "Alice",
//   age: 30,
//   greet() {
//     const self = this;
//     const nestedFunction = () => {
//       console.log(
//         `Hello, my name is ${self.name} and I am ${self.age} years old.`
//       );
//     };
//     nestedFunction();
//   },
// };

// console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// const employee = {
//   name: "Harsh",
//   age: 20,
//   deg: "sde",
//   address: null,
// };

// console.log(employee?.address?.fullAddress?.primary);
