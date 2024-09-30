console.log(10 < 20 && 30 > 15);
console.log(10 > 20 || 30 > 15);

// && - both have to be true - will return first falsy or the last value


// || - only one has to be true - will return first truthy or the last value


// ?? - returns the right side operand when the left side is null or undefined

let a;

a = 10 ?? 20; //10
a = null ?? 20; //20
a = undefined ?? 20; //20
a = 0 ?? 20; //0
a = '' ?? 20; //''

console.log(a); 