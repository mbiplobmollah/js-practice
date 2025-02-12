const persons = ['rakib', 'nokib', 'sakib','akib','dakib']
const sortedPersons=persons.sort();

console.log(sortedPersons)



const numbers = [4,1,53,72,9,3,12,46]

// ascending-----> smaller to larger
// descending-----> larger to smaller

// const numbersAsc = numbers.sort()//not working property
const numbersAsc = [...numbers].sort(function(a, b){return a-b}) // use this for ascending
const numbersDsc = [...numbers].sort(function(a, b){return b-a}) // use this for descending
console.log(numbersAsc)
console.log(numbersDsc)