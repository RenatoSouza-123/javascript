/*
Double equals: ==
- Checks for equality of value, but not equality of type
- It coerces both values to the same type and then compares them
- This can lead to some unexpected results
*/

console.log(4 == 4)
console.log(false == false)
console.log(7 == '7') //it converts them into a common type
console.log(0 == '')
console.log(0 == false)
console.log(null == undefined) //considered equals