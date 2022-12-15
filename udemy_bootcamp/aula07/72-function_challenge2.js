/*
Write a function to find the average value in an array

avg([0, 50]) -- 25
avg([75, 76, 80, 95, 100]) -- 85.2
*/

function average(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    let avg = total / arr.length;
    return avg;
}

console.log(average([75, 76, 80, 95, 100]))