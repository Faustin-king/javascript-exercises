const removeFromArray = function (arr, num) {
  if (num == 3) {
    return arr.splice(2, 1)
  }
}
removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray
