/*
function add(a, b){
  return a + b;
}
*/

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => a - b;

const double = a => a * 2;

// Returning an Object
const createObj = () => ({
  name: 'Que',
});


const numbers = [1,2,3,4,5];

numbers.forEach(function (n){
  console.log(n);
});

numbers.forEach(n => console.log(n));


console.log(createObj());

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));