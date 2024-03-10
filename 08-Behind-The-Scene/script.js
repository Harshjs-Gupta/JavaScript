"use strict";

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `You are ${age}, born in ${birthyear}`;
    console.log(output);
  }

  printAge();
  return age;
}
const firstName = "Harsh";
calcAge(1991);
