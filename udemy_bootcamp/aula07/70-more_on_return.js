/*
RETURN
The return statement ends function execution AND specifies the value to be returned by that function
*/

function square(x) {
    return x * x;
    console.log('All Done'); //it will not be printed
}

square(9)

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    return false;
}

isPurple('PURPLE')

//another way of writing the function above
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

containsPurple(['pink', 'green', 'magenta'])

