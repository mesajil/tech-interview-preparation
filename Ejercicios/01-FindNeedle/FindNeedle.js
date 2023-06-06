function FindNeedle(haystack, needle) {

  // for (let j = 0; j < haystack.length; j++) {
  //   // Find first coincident character
  //   if (haystack[j] === needle[0]) {
  //     // console.log("Match: ", haystack[j], j);
  //     let i;
  //     for (i = 0; i + j < haystack.length &&
  //       haystack[j + i] === needle[i] &&
  //       i < needle.length; i++);
  //     if (i === needle.length) return j;
  //   }
  // }

  // return -1

  

  let sol = {}; // solutions: { first: count }
  for (let i = 0; i < haystack.length; i++) {
    // Add solution
    if (needle[0] === haystack[i])
      sol[i] = 0;

    // Check character
    for (const first in sol) {
      if (needle[sol[first]] === haystack[i]) {
        sol[first]++;
      }
      else {
        delete sol[first];
      }
    }
    // Check solutions
    for (const first in sol)
      if (sol[first] === needle.length)
        return Number(first);
  }
  return -1;
};


// console.log(FindNeedle('rereredux', 'reredux'));

module.exports = FindNeedle

