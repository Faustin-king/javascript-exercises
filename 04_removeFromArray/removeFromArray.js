const removeFromArray = function (arr) {
  let removed = arr.splice(2, 0)
  return removed
}
removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray
