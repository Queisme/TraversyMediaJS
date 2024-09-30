// Falsy Values:

// - false
// - 0
// - "" or '' (Empty strings)
// - null
// - undefined
// - NaN

// Everything else is truthy

const x = 0;

if(x){
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0; //zero being evaluated as false  

if(!isNaN(children)){ //have to add caveat to make zero option valid
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children.");
}

// Checking for empty arrays

const posts =[];

if(posts.length > 0){
  console.log("List Posts");
} else {
  console.log("No Posts to List");
}

// checking for empty objects

const user = {};

if(Object.keys(user).length > 0){
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)

console.log(false == 0); //true
console.log("" == 0); //true
console.log(null == undefined); //true

