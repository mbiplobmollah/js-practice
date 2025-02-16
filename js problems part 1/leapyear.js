// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const leapYear = isLeapYear(2043)
// console.log(leapYear)


function isLeapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if(year % 400 === 0) {
        return true;
    }
    else{
        return false;
    }
}
const leapYear = isLeapYear(2100)
const leapYear1 = isLeapYear(2400)
const leapYear2 = isLeapYear(1900)
const leapYear3 = isLeapYear(2052)
console.log(leapYear)
console.log(leapYear1)
console.log(leapYear2)
console.log(leapYear3)