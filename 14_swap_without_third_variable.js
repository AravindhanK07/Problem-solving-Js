//Swap two num without 3rd variable

function swapTwoNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`a = ${a},b = ${b}`);
}

swapTwoNumber(2, 1);
