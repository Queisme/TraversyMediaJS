// For Of Loop

const items =['book', 'table', 'chair', 'kite'];

for (const item of items){
  console.log(item);
}
// Loop over objects

const users = [
  { name: 'Brad' },
  { name: 'Que' },
  { name: 'Henry' },
  { name: 'Chris' },
];

for(const user of users){
  console.log(user.name);
}

// Loop over strings

const str = 'Hello World';

for(const letter of str){
  console.log(letter);
};

// Loop over Maps

const map = new Map();
map.set('name', 'Que');
map.set('age', 30);

for(const [key, value] of map){
  console.log(key, value);
};