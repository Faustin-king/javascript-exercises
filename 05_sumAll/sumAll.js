const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR'
  if (min < 0 || max < 0) return 'ERROR'
  if (min > max) {
    const number = min
    min = max
    max = number
  }

  let total = 0
  for (let i = min; i < max + 1; i++) {
    total += i
  }
  return total
}

// Do not edit below this line
module.exports = sumAll
