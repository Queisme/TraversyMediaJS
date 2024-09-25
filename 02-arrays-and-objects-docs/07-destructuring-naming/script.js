let x;

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

x = person;

console.log(x);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  }
};

const { id: todoId, title } = todo;

console.log(todoId, title);

const { user: { name } } = todo;

console.log(name);


//Destructure Arrays

const numbers = [23, 67, 33, 49];

const [ ...rest ] = numbers;

//console.log(first, second); // 23 67
//console.log(first, second, ...rest); // 23 67 33 49
console.log(...rest); // 23 67 33 49
