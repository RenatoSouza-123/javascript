/*
parseInt & parseFloat

Use to parse strings into numbers, but watch out for NaN!
*/

console.log(parseInt('21'))
console.log(parseFloat('33.36'))

console.log(parseInt('$99')) //it won't work
console.log(parseInt('99 cents')) // it works because it starts with a number