function DecimalToBynary (num) {
  // Your code here:
  if (num <= 1) return num;
  let binary = ""
  while (num) {
    rest = num % 2
    num = Math.floor(num / 2)
    binary = rest + binary
  }
  return binary;
}

module.exports = DecimalToBynary
