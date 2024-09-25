let x;

const person = {
  name: 'Que Code',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'computers', 'video games']
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hadKids = true;

person.greet = function(){
  console.log(`Hello! My name is ${this.name}`);
};

person.greet();

x = person;


console.log(x);