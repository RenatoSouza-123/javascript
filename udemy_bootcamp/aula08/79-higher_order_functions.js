//FUNCTIONS ARE OBJECTS
function add(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

console.log(operations[1]);

console.log(operations[1](100, 4));

//we can loop over the array and call each function
for(let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doSomething: multiply
}

console.log(thing.doSomething(50, 2))

//by adding a function to an object, we are creating a method