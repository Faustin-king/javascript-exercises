const removeFromArray = function (...args) {
  const array = [0]
  const newArray = []
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item)
      console.log(newArray)
    }
  })
  return newArray
}

// Do not edit below this line
module.exports = removeFromArray
