const numbers = [1,2,3,4,5,6,7]

const revNumbers = []
let reverse = []

for(const num of numbers){
    console.log(num)
    revNumbers.unshift(num)
    
}
console.log(revNumbers)