// Ternary Operator === shorthand way to write a conditional

const age = 30;

// if statement

if(age >= 18){
  console.log("You can vote!");
} else {
  console.log("You cannot vote!");
}

// Ternary Operator

age >= 18 ? console.log("You can drive!") : console.log("You cannot drive!");

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVoteToo = age >= 18 ? "You can vote" : "You can't vote";

console.log(canVote);
console.log(canVoteToo);

// Multiple Statements

const auth = true;
//let redirect;

/*
if(auth){
  alert('Welcome to the dashboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = '/login;'
}
*/

//const redirect = auth ? (alert('Welcome to the dashboard'),'/dashboard') : (alert('Access Denied'),'/login');

//console.log(redirect);

auth ? console.log('Welcome to the dashboard'): null;
auth && console.log('Welcome to the dashboard again');