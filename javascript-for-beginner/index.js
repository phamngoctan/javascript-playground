// console.log('Hello World from index.js')

// Variables
// let myName = 'John';
// let lastName = 'Moser';
// console.log(myName);

// Constant
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Primitive types: cannot be changed in the future
// let fullName = 'Tan Pham'; // String Literal
// let age = 30; // Number literal
// let isApproved = true; // Boolean true/false
// let firstname = undefined; // a type and also a value
// let lastName = null; // Explicitly clear the value of var

// Dynamic typing
// let className = 5;
// console.log(typeof age)
// className = '5b'
// console.log(typeof className)

// Objects
// let person = {
//     name: 'John',
//     age: 30
// }
// // Dot notation
// person.name = 'Jim';
// console.log(person.name);
// // Bracket notation
// person['name'] = 'Henry';
// let selection = 'name';
// console.log(person[selection]);
// console.log(person);


// Arrays
// let selectedColors = ['red', 'blue'];
// console.log(selectedColors[0])
// selectedColors[2] = 'green'
// selectedColors[3] = 3
// console.log(selectedColors)
// console.log(typeof selectedColors)
// console.log(selectedColors.length)


// Functions
// function greet(name, lastName='') {
//     console.log('Hello ' + name + ' ' + lastName + '!');
// }
// greet('John', 'Moser');
// greet('Mary');

// function square(number) {
//     return number * number;
// }
// console.log(square(3));
// console.log(2 ** 2);

// ############## Good example about the bitwise usage
// Read, Write, Execute
// 00000100
// 00000010
// 00000001
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;

// let message = 
//     (myPermission & readPermission) ? 'yes' : 'no';

// console.log('Read permission allowed: ' + message);

// message = 
//     (myPermission & executePermission) ? 'yes' : 'no';
// console.log('Execute permission allowed: ' + message);

// ############# Good example about the OR operator usage
// Define the default value for a variable
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log('Showing the default color: ' + currentColor);
// userColor = 'red';
// currentColor = userColor || defaultColor;
// console.log('Showing the color user picked: ' + currentColor);


// For loop
// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0)
//         console.log(i);
// }


// while loop
// Do... while: always execute at least one time


// for...in loop
// const person = {
//     name: 'John',
//     age: 30
// }
// for (let key in person) {
//     console.log(key + ' ' + person[key]);
// }
// const colors = ['red', 'green', 'blue'];
// for (let index in colors) {
//     console.log(index + ' ' + colors[index]);
// }


// for...of loop
// From ECMA Specification 6 or ES6 in short
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color)
}