//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (it changes the original array)

let animals = [
    "shark",
    "salmon",
    "whale",
    "bear",
    "lizard",
    "tortoise"
]

//let's say we want to insert something after shark
animals.splice(1,0,"octopus")
console.log(animals)

//splice(startIndex, deleteCount, itemsToInsert)

console.log(animals.splice(3, 2)) //it returns an array containing the two deleted items
console.log(animals)

animals.splice(3, 0, "snake", "frog") //we use 0 not to remove anything, just insert
console.log(animals)

animals.splice(0, 2, "SHARK", "OCTOPUS")
console.log(animals)
