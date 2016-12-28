
//define module 'LeapYear'
  var LeapYear = function(input) {
    this.year = input; 
  };

//call function on 'LeapYear' module
LeapYear.prototype.isLeap = function() {

  var year = this.year; 

  //three conditions for leap year
  if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        return true
      }
      else {
        return false
      }
}; 

//export module
module.exports = LeapYear; 




