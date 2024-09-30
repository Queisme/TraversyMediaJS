// ||= assigns the right side value only if the left is a falsy value

let a = false;

a ||= 10;

console.log(a); // 10

// &&= assigns the right side value only if the left is a truthy value

let b = true;

b &&= 20;

console.log(b); // 20

// ??= assigns the right side value only if the left is null or undefined

let c = null;
c = undefined;

c ??= 30;

console.log(c); // 30