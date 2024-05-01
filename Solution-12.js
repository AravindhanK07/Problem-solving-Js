//Sum of digits

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let n = num % 10;
    sum += n;
    num = Math.floor(num / 10);
  }
  console.log(`Sum of digits in the given number ${sum}`);
}

sumOfDigits(12355);
