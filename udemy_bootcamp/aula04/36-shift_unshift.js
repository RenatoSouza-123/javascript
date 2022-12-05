//Unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

let dishesToDo = ["big platter"]
dishesToDo.unshift("large plate")
dishesToDo.unshift("small plate")
dishesToDo.unshift("cereal bowl")
dishesToDo.unshift("dirty spoon")
console.log(dishesToDo)

//Shift() method removes the first element from an array and returns that removed element. This method changes the length of the array

dishesToDo.shift()
dishesToDo.shift()
console.log(dishesToDo)

//we can add in multiple values at once
dishesToDo.unshift("fork", "knife")
console.log(dishesToDo)