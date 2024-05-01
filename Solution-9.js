//Check palindrome number

function checkPalindrome(num) {
  const temp = num;
  let rev = 0;

  while (num > 0) {
    let n = num % 10;
    rev = rev * 10 + n;
    num = Math.floor(num / 10);
  }
  if (temp == rev) {
    console.log("Palindrome number");
  } else {
    console.log("Not a palindrome number");
  }
}

checkPalindrome(1245);
