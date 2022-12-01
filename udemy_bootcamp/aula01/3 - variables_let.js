/*
Variables are like "labeled jars" for a value in JavaScript

We can store a value and give it a name, so that we can:
- recall it
- use it
- change it later on
*/

let age = 72;
console.log(age)

let hens = 4;
let roosters = 2;
console.log(hens + roosters)

console.log(hens - 1) //This does not change the value stored in hens

hens = hens - 1 //This does change the value stored in hens
console.log(hens)

//naming the variables is very important
let numOfHens = 6;
console.log(numOfHens)

//redeclaring a variable; we cannot redeclare it
let avgRating = 9.7;
console.log(avgRating)

let avgRating = 0; //not gonna work