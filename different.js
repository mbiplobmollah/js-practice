// odd numbers

// for(let i = 0; i<=20 ; i++){
//     if (i%2 === 1){
//     console.log(i);
//     }
// }
// odd numbers

// for(let i = 0; i<=20 ; i++){
//     if (i%2 !== 0){
//     console.log(i);
//     }
// }
// odd numbersCDDD

// for(let i = 1; i<=20 ; i+=2){
//     console.log(i);
// }


// even numbers

// for(let i = 0; i<=20 ; i++){
//     if (i%2 === 0){
//     console.log(i);
//     }
// }

// give me the list number between 1 to 30 which are divided by 5

// for(let i = 1 ; i<=30; i++ ){
//     if(i%5 === 0){
//         console.log(i);
//     }
// }
// give me the list number between 1 to 30 which are divided by 5 or 3

// for(let i = 1 ; i<=100; i++ ){
//     if(i%5 === 0 && i%3 === 0){
//         console.log(i);
//     }
// }
// give me the sum of thye sumbers that are divisible by 3
let sum = 0;
for(let i = 1 ; i<=20; i++ ){
    if(i%3 === 0){
        sum = sum + i;
    }
}
console.log('total of the numbers : ',sum);