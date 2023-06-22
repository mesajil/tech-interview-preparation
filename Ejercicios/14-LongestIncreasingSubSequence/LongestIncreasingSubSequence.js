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


function longestIncreasingSubsequence(nums, prev = -Infinity) {
  // Your code here:
  if (!nums.length) return 0
  const f = longestIncreasingSubsequence;
  const current = nums[0]
  const seqRest = f(nums.slice(1), prev)
  if (current < prev) return seqRest;
  const seqCurrent =  1 + f(nums.slice(1), current);
  return Math.max(seqCurrent, seqRest)
}

module.exports = longestIncreasingSubsequence

// Debugging
longestIncreasingSubsequence([3, 10, 4, 5])
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])