//Swap two num with 3rd variable

function swapTwoNumber(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(`a = ${a},b = ${b}`);
}

swapTwoNumber(12, 25);
