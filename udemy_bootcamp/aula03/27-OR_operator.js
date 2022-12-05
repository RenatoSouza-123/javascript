//(pipe character above the enter key) If one side os true, the whole thing is true
console.log(true || false);
console.log(false || false);
console.log('' || undefined);

let age = 76;

if (age < 6 || age >= 65) {
    console.log('You can enter for free')
} else {
    console.log('You cannot enter for free')
}

let color = "orchid";

if (color === 'purple' || color === 'violet' || color === "orchid") {
    console.log('Great choice')
} else {
    console.log('Choose again')
}