/*
GOALS
- Understand scope
- Write Higher Order Functions
- Pass functions as callbacks

SCOPE: Variable "visibility"
- The location where a variable is defined dictates where we have access to that variable
*/

function stuff() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
}
//these three variables are scoped to the function
//console.log(person) //this won't work

function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
}

stuff();
changeColor();

//another example
let bird = 'mandarin duck';

function birdWatch() {
    let bird = 'golden pheasant'; //bird is scoped to the function
    console.log(bird);
}

birdWatch();
console.log(bird);
