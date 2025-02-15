const jim = 55; 
const lim = 185;
const kim = 90;

if (jim > lim && jim > kim){
    console.log('jim will get the treat because he got highest numbers')
}
else if(lim > jim && lim > kim){
    console.log('lim will get the treat because she got highest numbers')
}
else{
    console.log('kim will get the treat because she got highest numbers')
}


// inside a function 
function getMax(num1, num2, num3){
    if (num1 < num2 && num3 < num3){
        return num2
    }
    else if (num2 < num1 && num3 < num1){
        return num1
    }
    else{
        return num3
    }
}

const greaterNumber = getMax(45, 65, 90)
console.log('The Biggest Number is :', greaterNumber)


const max = Math.max(34,576,675,545,54,545,24,24,876,21,876)
console.log('The biggest number is :' , max)