const sumAll = function (...theArgs) {
  const total = 0
  for (const arg of theArgs) {
    total += arg
  }
  return total
}

console.log(total(1, 2, 3, 4))

// Do not edit below this line
module.exports = sumAll
