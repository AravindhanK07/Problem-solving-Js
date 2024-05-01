//Print even sum from 1 to 90

function evenSum() {
  let count = 0;
  for (let i = 1; i <= 90; i++) {
    if (i % 2 == 0) {
      count += i;
    }
  }
  console.log(count);
}

evenSum();
