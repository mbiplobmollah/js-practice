// this is my way of solving this problem.
let sentence = 'Leightweight and durable backpack'

let chars = sentence.split(' ')
console.log(chars)
// let reverse = chars.reverse()
// console.log(reverse)

// console.log(reverse.join(' '))

//------------this is another way
let reverseSentence =''

// for(let i=0; i<chars.length; i++){
//     console.log(chars[i])
//     reverseSentence = chars[i] + ' ' +reverseSentence

// }
// console.log(reverseSentence)
//------------this is another way
let reverseSentenceFull =''

for(let i=chars.length-1; i >=0 ; i--){
    console.log(chars[i])
    let reverseSentence1 = chars[i] 
    // console.log(reverseSentence1)
    reverseSentenceFull = reverseSentenceFull+ reverseSentence1
    if(i > 0){
    reverseSentenceFull += ' '
    }
}
console.log(reverseSentenceFull)