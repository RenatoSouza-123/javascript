//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
let people = [
    "Mrs. Robinson",
    "Angie",
    "Jolene",
    "Maggie May",
    "Roxanne"
]

console.log(people.sort())
console.log(people) //it changes the original array

let nums = [
    31,
    14,
    64,
    78
];

console.log(nums.sort())
console.log(nums) //it changes the numbers into strings