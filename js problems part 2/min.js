const prices = [20000, 46000, 42000, 100000, 12000];


function getMin(numbers){
    let min = prices[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min

}

const cheap = getMin(prices);
console.log('This is the cheapest phone price : ', cheap);