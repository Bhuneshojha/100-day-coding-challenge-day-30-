"use strict";
//          100 days of coding challenge ( DAY 30 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01
function roundToNearestIntegar(num) {
    return Math.round(num);
}
// Example: Rounding  Decimal
console.log(roundToNearestIntegar(5.7));
console.log(roundToNearestIntegar(2.5));
// Question 02
// ---This function checks if a value is Not a Number (NaN)
function isValueNan(Value) {
    return isNaN(Value);
}
console.log(isValueNan("Iam here"));
console.log(isValueNan(108));
// ---This way, we can guard against unexpected non-numeric values in our calculations or inputs.
//   Question 03 
// ---This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// ---Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// ---We're taking strings that look like numbers and turning them into actual numbers.
