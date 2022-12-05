// condition ? expIfTrue : expIfFalse

let num = 7;

//Instead of writing the piece of code below
if (num === 7) {
    console.log("Lucky");
} else {
    console.log("BAD")
}

//We could simply write

num === 7 ? console.log("Lucky") : console.log("BAD")

//We can use a ternary operator to assign a value to a variable

let logged = "offline";

let color = logged === "offline" ? "red" : "green"
console.log(color)

