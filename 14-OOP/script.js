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

// .prototyeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// ///////////////////////////////////////
// // Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//       this.fullName = fullName;
//       this.birthYear = birthYear;
//     }

//     // Instance methods
//     // Methods will be added to .prototype property
//     calcAge() {
//       console.log(2037 - this.birthYear);
//     }

//     greet() {
//       console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//       return 2037 - this.birthYear;
//     }

//     // Set a property that already exists
//     set fullName(name) {
//       if (name.includes(' ')) this._fullName = name;
//       else alert(`${name} is not a full name!`);
//     }

//     get fullName() {
//       return this._fullName;
//     }

//     // Static method
//     static hey() {
//       console.log('Hey there 👋');
//       console.log(this);
//     }
//   }

//   const jessica = new PersonCl('Jessica Davis', 1996);
