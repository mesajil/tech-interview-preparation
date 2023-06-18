// function subsetSum(nums, n) {
//   // Your code here:
//   if(!nums.length) return false; 
//   const targets = new Set([nums[0]])
//   for (const num of nums.slice(1)) {
//     const sums = new Set([...targets])
//     for (const sum of sums) {
//       targets.add(sum + num)
//       targets.add(num)
//     }
//   }

//   if (targets.has(n)) return true;
//   return false;
// }

function subsetSum(nums, n) {
  if (!nums.length) return false;
  const first = nums[0]
  return first === n
    || subsetSum(nums.slice(1), n - first)
    || subsetSum(nums.slice(1), n)
}

module.exports = subsetSum
