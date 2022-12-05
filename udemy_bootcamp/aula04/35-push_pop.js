/*
ARRAY METHODS
- Push:      add to the end
- Pop:       remove from the end
- Shift:     remove from the start
- Unshift:   add to the start
- concat:    merge arrays
- includes:  look for a value
- indexOf:   just like str.indexOf
- join:      creates a string from arr
- reverse:   reverses an array
- slice:     copy portion of an array
- splice:    remove/replace elements
- sort:      sorts an array
*/

//Push: add to the end
let topSongs = [
    "This is how to disappear",
    "God knows I tried",
    "The Greatest",
    "Music to watch boys to"
];

topSongs.push("Blue Banisters");
console.log(topSongs);

//Pop: remove from the end
topSongs.pop();
console.log(topSongs);
