
function  validContact( contact ) {
    if(contact.length === 11 && contact[0] === '0' && contact[1] === '1' && !contact.includes(' ') && !isNaN(contact)){
        return true;
    }
    else if(typeof(contact) !== 'string'){
        return "Invalid";

    }
    else{
        return false;
    }

    
}

const number1 = validContact("01819234567");
const number2 = validContact("0181923 4567");
const number3 = validContact("018192345679");
const number4 = validContact(["01987654321"]);
const number5 = validContact("01345678900");
const number6 = validContact("02145678900");
const number7 = validContact(true);
console.log(number1,number2,number3,number4,number5,number6,number7);
