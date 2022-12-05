/*
TRUTHY AND FALSY VALUES
- All values have an inherent truthy or falsy boolean values
- Falsy values:
    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
- Everything else is truthy
*/

let mistery = 5;

if (mistery) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

let loggedInUser = 'thomas123';

if (loggedInUser) {
    console.log('You are logged in')
} else {
    console.log('Please log in')
}