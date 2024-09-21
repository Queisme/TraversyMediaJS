// Values are stored on the stack
const name = 'Que';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'Quinn',
    age: 40,
};

let nameName = name;
newName = 'John';

let newPerson = person;
newPerson.name = 'Chris';

console.log(name, newName);
console.log(person, newPerson);