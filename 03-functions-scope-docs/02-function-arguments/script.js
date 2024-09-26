// Default Parameters

function registerUser(user = 'Bot'){
  return user + ' is registered.';
};

console.log(registerUser());

// Rest Parameters

function sum(...numbers){
  let total = 0;

  for (const num of numbers){
    total += num;
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 21, 100));

// Objects as parameters

function loginUser(user){
  return `The user ${user.name} with the id of ${user.id} is logged in.`
};

const user = {
  id: 1,
  name: 'Que',
};

console.log(loginUser(user));
console.log(loginUser({
  id: 2,
  name: 'Chris',
}));

// Arrays as parameters

function randomNumber(numbers){
  const randomNum = numbers[(Math.floor(Math.random() * numbers.length))];
  return randomNum;
};

console.log(randomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]));

function getRandom(arr){
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]);