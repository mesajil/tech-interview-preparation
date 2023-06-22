function curry (fn) {
  // Your code here:

  const numParams = fn.length;
  const params = []

  const nextCaller = (arg) => {
    params.push(arg)
    if (params.length === numParams)
      return fn(...params)
    return nextCaller
  }
  
  return nextCaller
}

module.exports = curry
