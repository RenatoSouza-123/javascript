const palette = {
    red    : '#eb4d4b',
    yellow : '#f9ca24',
    blue   : '#30336b'
};

const palette2 = palette;

//if I update one of them, both will be updated; they are referring to the same thing in memory

palette2.green = '#ebf876';
console.log(palette);
console.log(palette2);