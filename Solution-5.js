//Count even number from 1 to 300

function countEvenNumbers() {
  let count = 0;
  for (let i = 1; i <= 300; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}

countEvenNumbers();
