/*
Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
*/

console.log(`I counted ${3 + 4} sheep`)

//We can use `` to write strings

let animal = "pig";

let sound = "oinc";

console.log(`${animal} says ${sound.toUpperCase()}.`) //interpolation of data

const minAge = 21;
const yourAge = 19;

console.log(`You must be ${minAge} to enter. Come back in ${minAge - yourAge} years.`)