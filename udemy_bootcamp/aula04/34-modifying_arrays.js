//Unlike variables, arrays are mutable

let shoppingList = ["Cheddar", "2% Milk"];

//to update a value
shoppingList[1] = "Whole Milk";

console.log(shoppingList)

//to add something to the end
shoppingList[2] = "Ice Cream";
console.log(shoppingList)

shoppingList[shoppingList.length] = "Tomatoes";
console.log(shoppingList)