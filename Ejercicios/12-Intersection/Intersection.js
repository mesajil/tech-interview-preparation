function intersection(arr1, arr2) {
  // Your code here:
  let intersection = [], j = 0, i = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr1[i]);
      i ++;
      j ++;
    }
    else if (arr1[i] < arr2[j]) {
      i ++;
    }
    else {
      j ++;
    }
  }
  return intersection
}

module.exports = intersection
