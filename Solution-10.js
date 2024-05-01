//Count number of digits

function countDigit(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  console.log(`Number of digits in the given number => ${count}`);
}

countDigit(10321);
