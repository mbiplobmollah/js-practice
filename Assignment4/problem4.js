
function  validProposal( person1 , person2 ) {
    if(typeof(person1) !== 'object' || typeof(person2) !== 'object'){
        return "Invalid";
    }
    else if((person1.gender ).toLowerCase()!== (person2.gender).toLowerCase() && Math.abs(person1.age-person2.age) <= 7){
        return true;
    }
    else{
        return false;
    }
}

const result1 = validProposal({ name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 } );
const result2 = validProposal({ name: "milon", gender: "male", age: 20 },
    { name: "sumi", gender: "female", age: 25 }
    );
const result3 = validProposal({ name: "shuvo", gender: "male", age: 20 },
    { name: "joy", gender: "male", age: 25 } );
const result4 = validProposal({ name: "toya", gender: "female", age: 20 },
    { name: "kader", gender: "male", age: 25 } 
    );
const result5 = validProposal({ name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }
    );
const result6 = validProposal("Mizan", { name: "mitu", gender: "male", age: 32 });
const result7 = validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan");
console.log(result1,result2,result3,result4,result5,result6,result7);


