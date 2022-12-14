const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

for (i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j]
    }
    console.log(`${row} summed to ${sum}`)
}

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
} //this is much cleaner