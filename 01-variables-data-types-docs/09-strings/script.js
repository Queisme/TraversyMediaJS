let x;

const name = 'Que';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old.';

x = `Hello my name is ${name} and I am ${age} years old.`

// String properties and methods

const s = 'Hello World!'

x = s.length; //12
x = s[1] // access value by key
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('H');
x = s.indexOf('l');
x = s.substring(0, 4); // Hell
x = s.slice(0, 4); // Hell
x = s.trim();
x = s.replace('World', 'Henry');
x = s.includes('Hell');
x = s.valueOf();
x = s.split();
x = s.split(' ');
x = s.split('');




console.log(x);