// 12 inch 1 feet

//problem1

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result
}

const result1 = inchToFeet(75);
console.log(result1.toFixed(2));


const result2 = inchToFeet2(75);
console.log(result2);


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const resultKilo = mileToKilometer
(75);
console.log(resultKilo.toFixed(4));