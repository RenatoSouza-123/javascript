//The reverse() method reverses an array in place (it mutates the original array). The first element becomes the last, and the last array element becomes the first

let letters = ["A", "G", "T", "R", "M", "U", "Q"]

console.log(letters.reverse())
console.log(letters)

//The join() method creates and returns a new string by concatenating all of the elements in an array (or array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator
console.log(letters.join())
console.log(letters) //it does not affect the original array

console.log(letters.join('-'))

//We can combine methods
console.log(letters.reverse().join('.'))

//if the elements in the array are not strings, the join() method will turn them into strings
let stuff = [12, false, 'hello']
console.log(stuff.join(' # -> ')) //this will return a string
