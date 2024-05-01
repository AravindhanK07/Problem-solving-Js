//Remove duplicate in array

function removeDuplicate(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate([2, 3, 3, 5, 6, 10]));
