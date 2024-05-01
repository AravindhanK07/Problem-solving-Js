//Check palindrome

function checkPalindrome(str) {
  const originalString = str;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  if (originalString === rev) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}

checkPalindrome("MALAYALAM");
