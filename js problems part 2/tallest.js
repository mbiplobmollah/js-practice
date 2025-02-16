const heights = [70, 79, 61, 45, 43, 46, 67, 78, 72]

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
       if(num > max){
        max = num;

        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is : ' , max);

