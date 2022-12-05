console.log(!null)
console.log(!"")

console.log(!(0 === 0))

let loggedInUser;

//If there isn't a logged in user

if (!loggedInUser) {
    console.log('You may not enter')
}

let flavor = "grape";

if (flavor !== "grape" && flavor !== "cherry") {
    console.log("We don't have that flavor")
} else {
    console.log("We do have that flavor")
}