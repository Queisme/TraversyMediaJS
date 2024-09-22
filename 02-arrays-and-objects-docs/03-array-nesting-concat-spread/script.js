let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//fruits.push(berries);

//x = fruits[3][1]; //blueberry

const allFruits = [fruits, berries];

x = allFruits[1][0]; //strawberry

x = fruits.concat(berries);

// Spread Operator (...)

x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]

// Array Object

x = Array.isArray(fruits) //true

x = Array.from('12345'); //['1', '2', '3', '4', '5']

const a = 1
const b = 2
const c = 3;

x = Array.of(a, b, c); //[1, 2, 3]


console.log(x);