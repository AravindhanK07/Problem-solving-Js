// Check the number is prime or not

function checkPrime(num) {
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count) {
    console.log("Prime number");
  } else {
    console.log("Not a prime number");
  }
}

checkPrime(7);
