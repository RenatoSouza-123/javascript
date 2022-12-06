let fruit = "orange";
let color = fruit;

console.log(color)

//What if we decide to change the value of fruit?
fruit = "watermelon"
//What is the value of color
console.log(color) //it remains with the old value

//Value Type Variable: the actual value is stored in memory

//When we work with arrays, they are stored in reference types
let nums = [5, 6, 7, 8]; //both are pointing to the same location in memory
let otherNums = nums;

//if I change nums, this change will reflect on otherNums
nums.push(9)
console.log(otherNums)

//If I change otherNums, nums will also be impacted
otherNums.pop()
otherNums.pop()
console.log(nums)