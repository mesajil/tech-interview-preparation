function MaxValue(shares) {
  // Your code here:
  if (!shares.length) return;
  let min = { index: 0, value: shares[0] };
  let max = { index: 0, value: shares[0] };
  let profits = [max.value - min.value]

  for (let i = 1; i < shares.length; i++) {
    if (shares[i] < min.value){
      min = { index: i, value: shares[i] }
      max = { index: i, value: shares[i] }
    }

    if (shares[i] > max.value)
      max = { index: i, value: shares[i] }

    if (max.index > min.index)
      profits.push(max.value - min.value)
  }


  // Return max profit
  let maxProfit = 0;
  for (const profit of profits)
    if (profit > maxProfit)
      maxProfit = profit;
  return maxProfit;
}


module.exports = MaxValue
