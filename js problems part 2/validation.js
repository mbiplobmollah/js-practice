function multiply (num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(2, 'seven');
// console.log(result);


function fullName (first, second) {
    if(typeof first != 'string' || typeof second != 'string'){
        return 'Please provide a character'
    }
    const full = first + ' ' + second;
    return full;
}

const newName = fullName('rohan', 7);
// console.log(newName);


function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please enter an object';
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name: 'phone' ,price: 20000, color: 'blue'})
const price = getPrice(5)
// console.log(price)


function getSecond(numbers){
    console.log(Array.isArray(numbers))
    if(Array.isArray(numbers) === false){
        return 'Please enter an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond(45);
console.log(second);