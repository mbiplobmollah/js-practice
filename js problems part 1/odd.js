function oddAverage(num){
    let sum = 0;
    let newArray = [];

    for(const allNumbers of num){
        console.log(allNumbers)
        if(allNumbers % 2 === 1){
            newArray.push(allNumbers)
            sum = sum + allNumbers;
            
        }
    }
    console.log(newArray)
    console.log('The sum of odd element and Number of element is: ',sum,newArray.length)
    const  avg = sum / newArray.length
    return avg;

}
const numbers = [42 , 13, 58 , 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd number is :',avg)