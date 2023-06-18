// function longestIncreasingSubsequence(nums) {
//   // Your code here:
//   if (!nums.length) return 0

//   let sequences = [[nums[0]]], maxLength = 1;
//   for (let i = 1; i < nums.length; i++) {
//     for (const seq of [...sequences]) {
//       const top = seq.slice(-1)
//       if (top < nums[i]) {
//         const newSeq = [...seq, nums[i]]
//         sequences.push(newSeq)
//         if (newSeq.length > maxLength)
//           maxLength = newSeq.length
//       }
//     }
//     sequences.push([nums[i]])
//   }
//   return maxLength;
// }


function longestIncreasingSubsequence(nums, top = -1) {
  // Your code here:
  /**
   * The solution is between
   *    Base case. No numbers are given
   *    1. Longest sequence considering the first element
   *    2. Longest sequence without the first element
   */
  if (!nums.length) return 0
  const case1 = (nums[0] > top)
    ? 1 + longestIncreasingSubsequence(nums.slice(1), nums[0])
    : 0
  const case2 = longestIncreasingSubsequence(nums.slice(1), top)
  return Math.max(case1, case2)
}

module.exports = longestIncreasingSubsequence

// Debugging
longestIncreasingSubsequence([3, 10, 4, 5])
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])