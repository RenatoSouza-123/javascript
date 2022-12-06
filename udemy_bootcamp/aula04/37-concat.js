//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];
let meat = ["steak", "chicken breast"]

console.log(fruits.concat(veggies))
console.log(veggies.concat(fruits))

let allFood = fruits.concat(veggies, meat)
console.log(allFood)