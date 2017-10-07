// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function returnFirstTwoDrivers(array) {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, someFunction) { //if you call this function, you need to pass it in the constant, not the function (selectDifferentDrivers(drivers, returnFirstTwoDrivers)).  You can't pass the actual function as the argument 
  return someFunction(array)
}
