//We can store arrays inside other arrays

const animalPairs = [
    ["doe", "buck"],
    ["ewe", "ram"],
    ["peahen", "peacock"]
]

console.log(animalPairs[2][0])

animalPairs[0][1] = "stag"
console.log(animalPairs)

