const products = [
    {name: 'chiruni', price: 100, quantity: 5},
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'shirt', price: 700, quantity: 3},
    {name: 'pant', price: 1000, quantity: 1}
]

function shoppingTotal(allProducts){

    let total = 0
    for(const product of allProducts){
        total = total + product.price * product.quantity;
        
    }
    return total;

}

const totalCost = shoppingTotal(products)

console.log('Total Cost :',totalCost)