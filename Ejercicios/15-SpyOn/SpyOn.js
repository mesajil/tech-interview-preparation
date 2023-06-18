function spyOn (fn) {
  // Your code here:

  let count = 0;
  let calledArgs = []
  let returned = []

  const mySpy = (...args) => {
    count ++;
    calledArgs.push(...args)
    output = fn(...args)
    returned.push(output)
    return output
  }

  mySpy.getCallCount = () => count;
  mySpy.wasCalledWith = (value) => calledArgs.includes(value);
  mySpy.returned = (value) => returned.includes(value)

  return mySpy;
}

module.exports = spyOn


// Test

function adder(n1, n2) { return n1 + n2; }

const adderSpy = spyOn( adder );

console.log(adderSpy.getCallCount()); // 0

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy.getCallCount()); // 1


console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.getCallCount()); // 2
console.log(adderSpy.wasCalledWith(2)); // true
console.log(adderSpy.wasCalledWith(0)); // false

console.log(adderSpy.returned(6)); // true
console.log(adderSpy.returned(9)); // false