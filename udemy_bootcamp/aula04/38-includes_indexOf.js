// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let ingredients = [
    "water",
    "corn starch",
    "flour",
    "cheese",
    "brown sugar",
    "shrimp",
    "eel",
    "butter"
]

console.log(ingredients.includes("fish")) // false
console.log(ingredients.includes("flour")) // true

console.log(ingredients.includes("water", 3)) // false
//does the array include the element "water" after the index 3?

if (ingredients.includes("flour")) {
    console.log("I cannot eat gluten")
}

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(ingredients.indexOf("eel"))
console.log(ingredients.indexOf("cheese", 5)) //it does not exist after the index of 5