
function calculateVAT( price ) {
   const vat = price * 7.5 / 100;
   if(typeof(price) !== "number" || price < 0){
    return "Invalid" ;
   }
   return vat;
}

const vat1 = calculateVAT(1500);
const vat2 = calculateVAT(200);
const vat3 = calculateVAT(999);
const vat4 = calculateVAT(-500);
const vat5 = calculateVAT("101");
const vat6 = calculateVAT("foo");
console.log(vat1,vat2,vat3,vat4,vat5,vat6)