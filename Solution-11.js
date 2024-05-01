//Check armstrong or not

function checkArmstrong(num) {
  const originalNum = num;
  let count = 0;
  let arm = 0;

  let temp = num;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  temp = num;
  while (temp > 0) {
    let n = temp % 10;
    arm = arm + n ** count;
    temp = Math.floor(temp / 10);
  }
  if (originalNum == arm) {
    console.log(`${originalNum} is an armstrong number`);
  } else {
    console.log(`${originalNum} is not an armstrong number`);
  }
}

checkArmstrong(157);
