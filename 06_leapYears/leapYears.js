const leapYears = function (leapYear) {
  if (leapYear / 4 && leapYear / 400) {
    return true
  } else {
    return false
  }
}

// Do not edit below this line
module.exports = leapYears
