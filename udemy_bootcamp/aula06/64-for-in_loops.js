const jeopardyWinnings = {
    regularPlay           : 2522700,
    watsonChallenge       : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades    : 100000
};

//for...in access the keys of the Object
for (let prop in jeopardyWinnings) {
    console.log(prop)
    //if we also want the values
    console.log(jeopardyWinnings[prop])
};

let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
};
console.log(total)

for (let k in [88, 56, 87, 23]) {
    console.log(k) //we're gonna get the indices of the elements in the array
}


