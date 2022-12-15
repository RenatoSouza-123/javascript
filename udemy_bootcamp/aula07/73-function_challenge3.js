/*
A pangram is a sentence that contains every letter of the alphabet, like:
"The quick brown fox jumps over the lazy dog"

Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing.
*/

function isPangram(sentence) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of letters) {
        if (sentence.toLowerCase().indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))

//we could also write the function as follows
function isPangram(sentence) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of letters) {
        if (!sentence.includes(char)) {
            return false;
        }
    }
    return true;
}