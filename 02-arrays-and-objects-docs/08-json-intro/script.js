const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(post);
console.log(str); //this is what you send to a server

// Parse JSON string
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body too',
  },
  {
    id: 3,
    title: 'Post Three',
    body: 'This is the body three',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);

console.log(obj);