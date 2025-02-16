const heights = [70, 79, 61, 45, 43, 46, 67, 78, 72]

function getMax(numbers){
    let min = numbers[0];
    for(const num of numbers){
       if(num < min){
        min = num;

        }
    }
    return min;
}

const min = getMax(heights);
console.log('min value is : ' , min);