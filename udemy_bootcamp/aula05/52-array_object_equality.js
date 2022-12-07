let nums = [1, 2, 3];
let mystery = [1, 2, 3];

//although they look the same, they are referring to different locations in memory
//that is why nums === mystery is false

let moreNums = nums; //now they are referring to the same location in memory

moreNums.push(4);
console.log(moreNums);
console.log(nums);

const user = {
    userName      : 'CherryGarcia8',
    email         : 'garcia@gmail.com',
    notifications : []
};

if (user.notifications.length === 0) {
    console.log('No new notifications')
}