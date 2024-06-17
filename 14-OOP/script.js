/* LECTURE 209 */
/* Constructor function and the new operator */

// const Person = function (firstName, birthyear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthyear = birthyear;

//   //Never do this
//   // this.calcAge = function(){
//   //   console.log(2037 - this.birthyear);
//   // }
// };

// const harsh = new Person("Harsh", 1991);
// console.log(harsh);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("matilda", 2017);
// const jack = new Person("Jack", 1975);
// console.log(matilda, jack);

// const jay = Person("Jay", 2016);
// // USE of instanceof Method: Here we check whether an object belongs to a certain class or not
// console.log(harsh instanceof Person); //true
// console.log(jay instanceof Person); //false

// /////////////////////////////////////////
// /* LECTURE 210 */
// /* Prototype */
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthyear);
// };

// harsh.calcAge();
// matilda.calcAge();

// console.log(harsh.__proto__);
// console.log(harsh.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(harsh));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
