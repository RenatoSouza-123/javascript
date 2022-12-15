/*
We can also write functions that accept inputs, called arguments
*/

function greet(person) {
    console.log(`Hello, ${person}!`);
}

greet('Renato')
greet() //undefined

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
}

function throwDice(numRolls) {
    for (let i = 1; i <= numRolls; i++){
        rollDie();
    }
}

throwDice(3)