//RETURNING FUNCTIONS


//this function is a factory for making more functions
function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
console.log(triple)
console.log(triple(6))

const double = multiplyBy(2);
console.log(double);
console.log(double(5))

const halve = multiplyBy(0.5);
console.log(halve);
console.log(halve(5))

function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(17));