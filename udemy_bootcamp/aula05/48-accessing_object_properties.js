const numbers = {
    '100': "one hundred",
    '16' : "sixteen",
    '76 trombones': 'great song'
};

console.log(numbers['100'])
console.log(numbers['76 trombones']) //it is stored as a string even if it is an invalid identifier

const palette = {
    red    : '#eb4d4b',
    yellow : '#f9ca24',
    blue   : '#30336b'
};

console.log(palette.blue);
console.log(palette['yellow'])

let mysteryColor = 'yellow';
console.log(palette[mysteryColor])
