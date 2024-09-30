function calculator(num1, num2, operator){
  let result;

  switch(operator){
    case '+':
      result = (`${num1} ${operator} ${num2} = ${num1 + num2}`);
      break;
    case '-':
      result = (`${num1} ${operator} ${num2} = ${num1 - num2}`);
      break;
    case '*':
      result = (`${num1} ${operator} ${num2} = ${num1 * num2}`);
      break;
    case '/':
      result = (`${num1} ${operator} ${num2} = ${num1 / num2}`);
      break;
    default:
      result = "ERROR: NOT VALID";
  }
  console.log(result);
  return result;
}

calculator(12, 22, '+');
calculator(3, 8, '*');
calculator(9, 3, '/');
calculator(13, 32, '-');
calculator(302, 32, '%');

/*
function calculator(num1, num2, operator){
  switch(operator){
    case '+':
      console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
      break;
    case '*':
      console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
      break;
    case '/':
      console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("ERROR: NOT VALID");
  }
}

calculator(1, 2, '+');
calculator(3, 8, '*');
calculator(9, 3, '/');
calculator(13, 32, '-');
calculator(302, 32, '%');
*/