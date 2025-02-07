var weight = 70 ;
var height = 2 ;
var hSquare = height * height;
var bmi = weight / hSquare;

if(bmi < 18.5){
    console.log('you are underweight');
}
else if(bmi >= 18.5 && bmi <= 24.9) {
 console.log('you are normal');
}
else if(bmi >= 25 && bmi <=29.9){
console.log('you are overweight');
}
else{
    console.log('you are obese.');
}



// =======================================
// another type of answer from chatgpt for learning purpose.

// if (bmi < 18.5) {
//     console.log("You are underweight.");
// } else {
//     if (bmi <= 24.9) {
//         console.log("You are normal.");
//     } else {
//         if (bmi <= 29.9) {
//             console.log("You are overweight.");
//         } else {
//             console.log("You are obese.");
//         }
//     }
// }