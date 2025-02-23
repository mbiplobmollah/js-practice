const products = [
    {id: 1, name: 'Walton phone', price: 13000},
    {id: 2, name: 'Xiaomi phone', price: 13000},
    {id: 3, name: 'laptop lenovo desire', price: 50000},
    {id: 4, name: 'Samsung phone', price: 18000},
    {id: 5, name: 'Techno Phone', price: 12000},
    {id: 6, name: 'IPhone', price: 130000},
    {id: 7, name: 'acer laptop', price: 13000},
    {id: 8, name: 'Itel phone', price: 10000},
    {id: 9, name: 'Hp laptop', price: 13000}
]

function matchedProducts (products, search){
    const matched = [];
    for(const product of products ){
        if((product.name).toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products,'laptop');
console.log(result)