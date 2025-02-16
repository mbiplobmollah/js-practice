function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const remaining = 70;
    if(quantity <= 100){
        const total = first100Price * quantity
        return total
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal
        return total; 
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * remaining;
        const total = first100Total + second100Total + remainingTotal
        return total
    }
}


const discount = layeredDiscountedTotal(201);
console.log('You will have to pay : ', discount);