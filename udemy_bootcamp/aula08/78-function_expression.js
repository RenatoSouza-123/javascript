/*
FUNCTION EXPRESSIONS

There's another syntax we can use to define functions:

const square = function (num) {
    return num * num;
}
square(7);

FUNCTIONS ARE OBJECTS
*/

function add(x, y) {
    return x + y;
}

const sum = function(x, y) {
    return x + y;
}

console.log(add(4, 5));
console.log(sum(4, 5));

console.dir(sum);

//a função não precisa ser anônima quando declarada em uma variável, ela pode ter um nome
const product = function multiply(x, y) {
    return x * y;
}

console.log(product(5, 6)); //funciona
//console.log(multiply(5, 6)); //não funciona

