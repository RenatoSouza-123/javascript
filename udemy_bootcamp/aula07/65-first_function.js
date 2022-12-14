/*
GOALS
- Write valid functions
- Write functions with arguments
- Compare function expressions & function statements
- Write a bunch of functions

FUNCTIONS
Reusable procedures
- Functions allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute at a later point
- We use them all the time
*/

function grumpus() {
    console.log('ugh... you again');
    console.log('for the last time');
    console.log('leave me alone');
}

grumpus() //to print the function

for (i = 0; i < 3; i++) {
    grumpus();
}
