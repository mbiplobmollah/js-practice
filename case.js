const school = 'BCIC college';

console.log(school)
console.log(school.toLowerCase())
console.log(school.toUpperCase())

const subject = 'chemistry'
const book = 'ChemIstry'

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('book and subject duita thik ase')
}
else{
    console.log('book and subject duita thik nai')

}


const drink = 'water'
const liquid = ' water '

if(drink.trim() === liquid.trim()){
    console.log('water ase kintu space thakar por o mila gese')

}
else{
    console.log('water ase kintu space thakar karone mile nai')
}

