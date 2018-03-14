//This is a program that converts todays forecast from Kelvin to Celsius and Fahrenheit

//this is todays forecast in kelvin
// const kelvin = 294;
//
// //this is to convert kelvin to celsius
// const celsius = kelvin - 273;
//
// //this converts celsius to fahrenheit
// let fahrenheit = celsius * (9/5) + 32;
//
// //this rounds fahrenheit to the nearest whole number
// fahrenheit = Math.floor(fahrenheit);
//
// //this logs the temperature in fahrenheit
// console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);


//This is a program to convert the current temperature from Celsius to Fahrenheit and Kelvin

//let celsius = -1;

//this only works with browsers not node in terminal
let celsius = prompt('What is the current temperature in Celsius?');

//use this with a browser prompt to convert the string to an integer
celsius = parseInt(celsius);


console.log(`The current temperature in Celsius is ${celsius}.`);

//converts celsius to kelvin
const kelvin = celsius + 273;

console.log(`The current temperature in Kelvin is ${kelvin}.`);

//converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//rounds fahrenheit to nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The current temperature in Fahrenheit is ${fahrenheit}.`);
