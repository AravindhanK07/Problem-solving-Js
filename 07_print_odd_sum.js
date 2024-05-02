//Print odd sum from 1 to 80

function oddSum() {
  let count = 0;
  for (let i = 1; i <= 80; i++) {
    if (i % 2 != 0) {
      count += i;
    }
  }
  console.log(count);
}

oddSum();
