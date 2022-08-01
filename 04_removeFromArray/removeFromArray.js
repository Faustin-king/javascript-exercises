const removeFromArray = function (...args) {
  const Array = args[0]
  const newArray = []
  Array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item)
      console.log(newArray)
    }
  })
  return newArray
}

// Do not edit below this line
module.exports = removeFromArray
