const sumAll = function (...theArgs) {
  let total = 0
  for (const arg of theArgs) {
    total += arg
  }
  return total
}

// Do not edit below this line
module.exports = sumAll
