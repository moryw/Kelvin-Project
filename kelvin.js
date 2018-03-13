// //this is todays forecast in kelvin
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


//This is a program to convert the current temperature from Celsius to Fahrenheit
//and Kelvin

let celsius = -1;

//this only works with browser
//let celsius = prompt('What is the current temperature in Celsius?');

celsius = parseInt(celsius);
console.log(`The current temperature in Celsius is ${celsius}.`);

const kelvin = celsius + 273;

console.log(`The current temperature in Kelvin is ${kelvin}.`);

let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The current temperature in Fahrenheit is ${fahrenheit}.`);
