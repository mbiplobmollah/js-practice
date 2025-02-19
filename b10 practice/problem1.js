function calculateTax(income,expense){

    if(expense > income || income < 0 || expense < 0){
        return "Invalid Input"
    }
    else{
        const difference = income - expense;
        const tax = difference * 0.20;
        return tax;

    }

}
const result = calculateTax(6000,-1500)
console.log(result)