function HasBalancedBrackets(string) {
  // Your code here:
  const CHAR = {
    "{": "}",
    "(": ")",
    "[": "]",
  }
  const queue = []
  for (const char of string) {

    const lastChar = queue[queue.length - 1]
    if (!lastChar || CHAR[lastChar] !== char)
      queue.push(char)
    else
      queue.pop(char)
  }

  return !queue.length
}


module.exports = HasBalancedBrackets
