if (true) {
    let animal = 'eel'; //this variable is scoped inside this conditional block
}

//console.log(animal); //it won't work

//but it works differently when we use var, this tells us that let and const have different scoping rules than var
if (true) {
    var animal = 'eel';
    console.log(animal); 
}

console.log(animal);

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];

for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log(i) //the problem of using var is this, we can still access the variable outside the block

//this problem doesn't occur when we use let
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
};

console.log(i);

function doubleArr(arr) {
    const result = [];
    for(let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    return result;
}

console.log(doubleArr([1, 2, 3]));