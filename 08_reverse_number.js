//Reverse the number 123

function reverseNumber(num) {
  let rev = 0;

  while (num > 0) {
    let n = num % 10;
    rev = rev * 10 + n;
    num = Math.floor(num / 10); // Use Math.floor() for integer division
  }

  console.log(rev);
}

reverseNumber(123);
