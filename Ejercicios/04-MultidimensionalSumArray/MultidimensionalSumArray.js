// function mdArraySum (arr) {
//   // Your code here:
//   const first = arr[0]
//   if (!first) return 0
//   if (!Array.isArray(first))
//     return first + mdArraySum(arr.slice(1))
//   return  mdArraySum(first) + mdArraySum(arr.slice(1))
// }


function mdArraySum(arr) {
  // Your code here:
  const first = arr[0]
  if (!first) return 0
  const mdArraySumFirst = !Array.isArray(first) ? first : mdArraySum(first)
  return mdArraySumFirst + mdArraySum(arr.slice(1))
}

module.exports = mdArraySum
