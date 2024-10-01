// Loops - a control structure that provides a way to do iteration in programming

// for(initialExpression; conditionExpression; incrementExpression) statement;

// initial expression - Initializes a variable/counter
// condition expression - Condition that the loop will continue to run as long as it is met or until the conition is false
// increment expression - expression that will be executed after each iteration of the loop
// statement - code that will be executed each time the loop is run.
/*
for(let i = 1; i <= 12; i++){
  if(i === 7){
    console.log(`Lucky 7!`);
  } else {
    console.log(`Number ${i}`);
  }
}
*/

// Nest Loops
/*
for(let i = 1; i <= 12; i++){
  console.log(`Number ${i}`);

  for(let j = 1; j <= 12; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
*/

// challenge

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++){
  if(i === 2){
    console.log('Sara is the best');
  } else if (names[i] === 'John'){
    console.log(names[i] + ' is alright, too');
  } else {
    console.log(names[i]);
  }
}
