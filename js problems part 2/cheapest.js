const mobiles = [
    {name: 'Samsung', price: 60000 , camera: '20mp', color: 'black'},
    {name: 'Iphone', price: 100000 , camera: '20mp', color: 'blue'},
    {name: 'Oppo', price: 40000 , camera: '10mp', color: 'gray'},
    {name: 'Xaomi', price: 30000 , camera: '8mp', color: 'white'}
]

function getMin(phones){
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;

}

const cheap = getMin(mobiles);
console.log('This is the cheapest phone price : ', cheap);