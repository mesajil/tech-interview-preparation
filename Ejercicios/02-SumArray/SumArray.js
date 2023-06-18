// function SumArray(arr, n) {
//   // Your code here:

//   for (let i = 0; i < arr.length - 1; i++) {
//     const first = arr[i]
//     if (first < n) {
//       const second = n - first
//       if (arr.slice(i + 1).includes(second))
//         return true;
//     }
//   }
//   return false;
// }


function SumArray(arr, n) {
  arr.sort()
  // Your code here:
  const binarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      if (arr[mid] === target)
        return mid
      else if (arr[mid] < target)
        start = mid + 1;
      else
        end = mid - 1;
    }
    return -1;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const first = arr[i]
    if (first < n) {
      const second = n - first
      const indexFound = binarySearch(arr.slice(i + 1), second)
      if (indexFound != -1)
        return true;
    }
  }
  return false;
}

module.exports = SumArray
// Debugging
// SumArray([2, 5, 9], 4)
SumArray([4, 2, 9, 5], 7)