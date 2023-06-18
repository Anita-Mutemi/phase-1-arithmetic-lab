// Assignment
// There are four challenges we need you to solve. Code your solution in index.js. We'll provide some brief instructions here, but you should really rely on the test failure messages to guide your code.

// Instructions
// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
// Create a variable called random that will generate a random integer greater than 0.
// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
// Create a variable called max that finds the highest number in a set; the value returned should be 20.

// Write your code here

let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;
console.log(multiply); // Output: 62

let random = Math.floor(Math.random() * 100) + 1;
console.log(random); // Output: Random integer greater than 0

let num3 = 14;
let num4 = 5;
let mod = num3 % num4;
console.log(mod); // Output: 4

let set = [5, 10, 20, 15];
let max = Math.max(...set);
console.log(max); // Output: 20