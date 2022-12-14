const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
    console.log(`Target: ${target}  Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10); //we don't need let because we are updating the variable, not redeclaring it
}
console.log(`Target: ${target}  Guess: ${guess}`);

//While (some condition)
//in the loop, update or attempt to make that condition false
