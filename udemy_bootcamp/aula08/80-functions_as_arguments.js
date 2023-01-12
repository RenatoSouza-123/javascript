/*
HIGHER ORDER FUNCTIONS
Functions that operate on/with other functions. They can:
- Accept other functions as arguments
- Return a function
*/

function callThreeTimes(f) {
    f();
    f();
    f();
}

function cry() {
    console.log("I'm so sad!")
}

function rage() {
    console.log('I hate everything')
}

console.log(callThreeTimes(cry));

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

console.log(repeatNTimes(cry, 4));

function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    }
    else {
        f2();
    }
}

console.log(pickOne(cry, rage));