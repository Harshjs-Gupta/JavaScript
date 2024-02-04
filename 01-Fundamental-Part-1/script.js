// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// console.log(40 + 50);
// console.log("harsh");

// let firstName = "harsh";
// let lastName = "gupta";

// console.log(firstName);
// console.log(firstName, lastName);

/* this typeof operator show the data type of value*/
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "harsh");

/* this is a example of dynamic typing */
// javaScriptIsFun = "Yes!";
// console.log(typeof javaScriptIsFun);

// const birthday = 2004;
// birthday = 2003; /* so this reassigning a value through error in code because const keyword can't change in any way in future so we use const keyword where we conform that the should not be change in future */

/* operators */

// const firstName = "harsh";
// const lastName = " gupta";

// console.log(firstName + lastName); /* concatenation using addiotion opertor*/

// const ageHarsh = 19;
// const ageSam = 18;

// console.log(ageHarsh - ageSam);
// console.log(ageHarsh + ageSam);
// console.log(ageHarsh / 2, ageSam / 2);
// console.log(ageHarsh > ageSam);

/* concatenation*/

// const firstName = "harsh";
// const job = "student";
// const currentYear = 2023;
// const birthYear = 2002;

//Normal concatenation
// const harsh = "I'm " + firstName + ' , a ' + (currentYear - birthYear) + ' year old ' + job + ' !';
// console.log(harsh)

//concatenation using template literals
// const harshNew = `I'm ${firstName} , a ${currentYear - birthYear} year old ${job} ! `;
// console.log(harshNew);

/* write a code for if else statement */

// const age = 15;

// if (age >= 18) {
//   console.log(`harsh can start driving with license 🚗`);
// } else {
//   const yearLeft = 18 - age;
//   console.log(
//     `harsh is too young , wait another ${yearLeft} year to drive with license 😔`
//   );
// }

/* type conversion */

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 13);

/* type coresion*/

// console.log("I am " + 19 + "years old");
// console.log("23" + "10" + 3); /* here my ouput 23103 because here plus sign using like concatenation*/
// console.log("23" - "10" - 3);

/* truthy and falsy value*/
// const money = 0;
// if (money) {
//   console.log("Don't spend it all !");
// } else {
//   console.log("you should get a job");
// }
//in senario else part executed because of 0 is considered as a false value, so in if else stateent false value are not get printed truth value get printed. And when we decalre any vakue uin money then the javascript considered as a truth then the if part will be executed.

// const favourite = Number(prompt("Whats your favourite "));
// console.log(favourite);
// console.log(typeof favourite);

/* using logocal operator*/

// const hasDriverLicense = true;
// const hasGoodvision = true;

// console.log(hasDriverLicense && hasGoodvision);
// console.log(hasDriverLicense || hasGoodvision);
// console.log(!hasDriverLicense);
// console.log(!hasGoodvision);

// const isTired = true;
// console.log(hasDriverLicense && hasGoodvision && isTired);
// if (hasDriverLicense && hasGoodvision && !isTired) {
//   console.log("Harsh is able to drive !");
// } else {
//   console.log("Someone else should drive...");
// }

/* Switch statement*/

// const day = prompt("Enter week day: ");

// switch (day) {
//   case "monday":
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare note for theory 📖");
//     break;
//   case "wednesday":
//     console.log("Write code example📑");
//     break;
//   case "thrusday":
//   case "friday":
//     console.log("Record video 📽️");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy Weekend 😊");
//     break;
//   default:
//     console.log("Not a Valid day 😅");
// }
