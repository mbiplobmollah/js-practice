const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1000}
]



function shoppingTotal(allProducts){
    let total = 0
    for(const product of allProducts){
        total = total + product.price;
        
    }
    return total;

}

const totalCost = shoppingTotal(products)

console.log('Total Cost :',totalCost)