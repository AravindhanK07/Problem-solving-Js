//Factorial of the number 5

function factorial(num) {
  let fact = 1;
  while (num > 0) {
    fact = fact * num;
    num -= 1;
  }
  console.log(fact);
}

factorial(4);
