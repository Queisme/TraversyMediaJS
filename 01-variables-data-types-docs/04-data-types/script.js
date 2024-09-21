// Primitive Data Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference Types (Objects)
// Everything else

// String
const firstName = 'Que';

// Number
const age = 30;
const temp = 98.6;

//Boolean
const hasKids = true;

// Null
const aptNum = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1,2,3,4,5];

const person = {
    name: 'Que',
    email: 'que@gmail.com'
}

function sayHello(){
    console.log('Say Hello!');
}

const output = sayHello;


console.log(output, typeof output);