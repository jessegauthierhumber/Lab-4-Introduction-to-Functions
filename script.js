// Part 1: Declaring and Invoking Functions

// Step 1: Declare a simple function in script.js
// Write a function named greet that takes a single parameter (a person's name) and returns a greeting message. The function should return a string combining "Hello" and the name provided.

function greet(name) {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return "WOW You have no name!";
  }
}

console.log(greet("Teacher"));
console.log(greet());

//  Part 2: Working with Parameters and Returning Values
// Step 3: Create a function to add two numbers
// Create a function named addNumbers that accepts two parameters. It should return the sum of those parameters.

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(2, 3));

// Part 3: Function Scope
// Step 4: Local and Global Scope
// Declare a variable globally, then declare a function changeValue() that re-declares the same variable name inside the function and assigns it a different value. Observe the scope behavior by logging the variable in different places.

let globalVar = "I am a global variable";

function changeValue() {
  let globalVar = "I am a local variable";
  return globalVar;
}


console.log(globalVar)
console.log(changeValue());

// Part 4: Closures
// Step 5: Create a function with closure

// Write a function outerFunction that declares a local variable and returns an inner function. The inner function should update the local variable each time it's called.

function outerFunction() {
  let count = 0;
  return function () {
    count++;
  };
}
