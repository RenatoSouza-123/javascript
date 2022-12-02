/*
Strings come with a set of built-in methods, which are actions that can be performed on or with that particular string.

We can do things like:
- Search within a string
- Replace parts of a string
- Change case (upper/lowercase)
*/

//format --> string.method()

let msg = "You are so grounded, mr.";

//toUpperCase()
console.log(msg.toUpperCase())

//toLowerCase()
console.log(msg.toLowerCase())

let color = "       purple          ";

//trim()
console.log(color.trim())
console.log(color.trim().toUpperCase())

/*
Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.
*/

//indexOf()
let tvShow = 'catdog';

console.log(tvShow.indexOf('cat')) //0
console.log(tvShow.indexOf('dog')) //3
console.log(tvShow.indexOf('z'))   //-1 (not found)

//slice()
let sport = "Baseball"

console.log(sport.slice(0, 4)) //index 0 to index 4(not inclusive)
console.log(sport.slice(4))    //index 4 and forward

//replace()
console.log("baseball is entertaining".replace('entertaining', 'ok'))
console.log('ha ha ha'.replace('ha', 'he')) //it only replaces the first one
