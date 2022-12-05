//Both sides must be true in order for the whole thing to be true

console.log(true && true);
console.log(false && false);
console.log(1 <= 4 && 4 <= 5);

let password = "chickenGal";

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log('Valid password')
} else {
    console.log('Invalid password')
}

let num = 3;

if (num >= 1 && num <= 10) {
    console.log('Number is between 1 and 10')
} else {
    console.log('Invalid number')
}