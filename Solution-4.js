//Count odd number from 1 to 100

function countOddNumbers() {
  let count = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
      count++;
    }
  }
  console.log(count);
}

countOddNumbers();
