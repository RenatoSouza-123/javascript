/*
NOT (!) has higher precedence than && and ||
&& has higher precedence than ||
*/

let x = 7;
console.log((x === 7 || x === 3) && x > 10)