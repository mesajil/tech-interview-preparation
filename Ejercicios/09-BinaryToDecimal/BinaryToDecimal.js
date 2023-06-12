function BinaryToDecimal(binary) {
  // Your code here:
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += Number(binary[i]) * Math.pow(2, binary.length - i - 1)
  }
  return decimal;
}

module.exports = BinaryToDecimal
