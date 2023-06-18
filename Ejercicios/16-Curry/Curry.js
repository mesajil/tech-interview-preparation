function curry (fn) {
  // Your code here:

  const numExpectedParams = fn.length;
  const params = []

  const nextCaller = (arg) => {
    params.push(arg)
    if (params.length === numExpectedParams)
      return fn(...params)
    return nextCaller
  }
  
  return nextCaller
}

module.exports = curry
