let products = ['laptop', 'mobile', 'laptop', 'mobile', 'table']


let uniqueProducts =[]

for(i = 0; i < products.length; i++){
    const element = products[i]
    console.log(element)
    if(!uniqueProducts.includes(element)){
    uniqueProducts.push(element)
    }
}
console.log(uniqueProducts)