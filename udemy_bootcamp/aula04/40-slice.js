//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

let animals = [
    "shark",
    "salmon",
    "whale",
    "bear",
    "lizard",
    "tortoise"
]

let swimmers = animals.slice(0, 3)
console.log(swimmers)

let mammals = animals.slice(2, 4)
console.log(mammals)

let reptiles = animals.slice(4, 6) // or animals.slice(4)
console.log(reptiles)

let quadruped = animals.slice(-3)
console.log(quadruped)

//slice() is often used to make a copy of an array
let copy = animals.slice()