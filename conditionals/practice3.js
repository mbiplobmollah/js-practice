// var score = 78 ;

//  if(score >= 90)
// {
//     console.log('Grade: A')
// }
// else if(score >= 80)
// {
//     console.log('Grade: B')
// }
// else if(score >= 70)
// {
//     console.log('Grade: C')
// }
// else if(score >= 60)
// {
//     console.log('Grade: D')
// }
// else
// {
//     console.log('Grade: F')
// }


//---------------------
// another way

var score = 60 ;

 if(score <= 59)
{
    console.log('Grade: F')
}
else{
    if(score <= 69)
        {
            console.log('Grade: D')
        }
        else{
            if (score <= 79){
            console.log('Grade: C')
            }
        else{
            if(score <= 89){
                console.log('Grade: B')
            }
            else{           
                    console.log('Grade: A')
            }
        }
        }
}