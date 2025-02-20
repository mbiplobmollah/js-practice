const products = [
{name: 'Laptop', category: 'Electronics'},
{name: 'T-Shirt', category: 'Clothings'},
{name: 'Headphones', category: 'Electronics'},
{name: 'jeans', category: 'Clothings'}
]
let categoryElements = {
    electronics: [],
    clothings: []
}

for(let i=0; i < products.length; i++){
    const singleProducts = products[i]
    if(singleProducts.category === 'Electronics'){
        categoryElements.electronics.push(singleProducts.name)
    }
    else if(singleProducts.category === 'Clothings'){
        categoryElements.clothings.push(singleProducts.name)
    }
}
console.log(categoryElements)

