// my way of solving this problem 
// let price = '$259'

// let array = []

// let sum = 0;

// let chars = price.split('')

// console.log(chars)

// chars.shift()

// console.log(chars)

// for(i=0 ; i< chars.length; i++){
//         array.push(parseInt(chars[i],10))
//         sum = array[i] + sum

// }
// console.log(array)
// console.log(sum)

// another way==============


let price = '$259'


let sum = 0;

let chars = price.split('')
console.log(chars)

for (let i =0; i< chars.length; i++){
    let element = chars[i]
    // console.log(element, isNaN(element))
    if(!isNaN(element) && element !== ''){
        console.log(element)
        // sum = sum + parseInt(element)
        // sum += parseInt(element)
        sum += Number(element)
    }
}
console.log(sum)

// NaN = if not a number hoy tahole -> true
// NaN = if a number hoy tahole -> false