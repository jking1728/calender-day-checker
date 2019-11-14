export function Year (year){
  this.year = year
  this.isLeapYear = false
}

Year.prototype.checkLeapYear = function () {
  if ((this.year % 100 !== 0) && (this.year % 4 === 0) || (this.year % 400 === 0)) {
    this.isLeapYear = true;
  } else {
    this.isLeapYear = false;
  }
};

export let getDay = function (date){
  let dateStr = date.toString()
  let day = dateStr.slice(0,3)
  if (day === "Wed") {
    return (day + "nesday")
  } else if (day === "Thu") {
    return (day + "rsday")
  } else if (day === "Tue") {
    return (day + "sday")
  } else if (day === "Sat") {
    return (day + "urday")
  } else {
    return (day + "day")
  }
}
export let checkValid = function (month, day, year){
  if ((month === 3) || (month === 5) || (month === 8) || (month === 10) && (day === 31)) {
    return false;
  } else if (month === 1 && day === 29 && year.isLeapYear === false){
    return false;
  } else if (month === 1 && day > 29){
    return false;
  } else {
    return true;
  }
}
