/*
Write a isValidPassword function
It accepts 2 arguments: password and username
Password must:
    - be at least 8 characters long -- password.length >= 8
    - not contain spaces -- password.indexOf(' ') === -1
    - not contain the username 
If all the requirements are met, return true
Otherwise, returns false
*/

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

console.log(isValidPassword('helloThere123', 'helloThere'));
console.log(isValidPassword('hello there123', 'myUserName'));
console.log(isValidPassword('hiyou', 'myusername'));
console.log(isValidPassword('helloThere1234', 'myUserName'));
