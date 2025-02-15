const disha = 55; 
const salman = 85;

if (disha < salman){
    console.log('salman will get the treat because he got highest numbers')
}
else{
    console.log('disha will get the treat because she got highest numbers')
}

// inside a function 
function getMax(num1, num2){
    if (num1 < num2){
        return num2
    }
    else{
        return num1
    }
}

const greaterNumber = getMax(45, 65)
const greaterNumber1 = getMax(56, 85)
const greaterNumberUltimate = getMax(greaterNumber, greaterNumber1)
console.log('The Biggest Number is :', greaterNumber)
console.log('The Biggest Number is :', greaterNumber1)
console.log('The Biggest Number is :', greaterNumberUltimate)