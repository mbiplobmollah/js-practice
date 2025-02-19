
function  willSuccess( marks ) { 
    let pass = [];
    let fail = [];
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    for(const mark of marks){
        if(mark >= 50){
            pass.push(mark);
        }
        else{
            fail.push(mark);
        }
    }
    if(pass.length > fail.length){
        return true;
    }
    else{
        return false;
    }

}


const result1 = willSuccess([60, 70, 80, 40, 30])
const result2 = willSuccess([48 , 48 , 92 , 100 ])
const result3 = willSuccess([48, 48, 50, 50, 100])
const result4 = willSuccess([ ])
const result5 = willSuccess([ 90 ])
const result6 = willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ])
const result7 = willSuccess("100 , 100")
const result8 = willSuccess(90)
console.log(result1,result2,result3,result4,result5,result6,result7,result8);


