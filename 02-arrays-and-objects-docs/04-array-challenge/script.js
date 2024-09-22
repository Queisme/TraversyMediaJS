const arr = [1, 2, 3, 4, 5];

// [6, 5, 4, 3, 2, 1, 0];

arr.unshift(0);
arr.push(6);
arr.reverse(); // [6, 5, 4, 3, 2, 1, 0]

console.log(arr);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// [1,2,3,4,5,6,7,8,9,10]

arr2.splice(0, 1)
const arr3 = [...arr1, ...arr2]

console.log(arr3);