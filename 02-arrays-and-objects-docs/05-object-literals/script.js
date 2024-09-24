let x;

const person = {
  name: 'Que Code',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'Boston',
    state: 'MA',
  }
};

x = person.name;
x = person['age'];
x = person.address.state;

console.log(x);