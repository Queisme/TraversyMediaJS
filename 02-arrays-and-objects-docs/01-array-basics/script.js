let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 13];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grapes', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3]; //41

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

//fruits.length = 2;

fruits[fruits.length] = 'blueberry'; //length is always one more than the arr

x = fruits;





console.log(x);