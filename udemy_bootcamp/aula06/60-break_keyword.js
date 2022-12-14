for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break; //not that common in a for loop
    }
}

//but it is common in a while loop
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
    if(target === guess) break;
    console.log(`Target: ${target}  Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}  Guess: ${guess}`)