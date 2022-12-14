/*
FOR ... OF
A nice and easy way of iterating over arrays (or other iterable objects)
*/

let subreddits = ['soccer', 'pophead', 'cringe', 'books']

for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i])
}

//OR

for (let sub of subreddits) {
    console.log(sub)
}

for (let char of 'hello') {
    console.log(char.toUpperCase())
}