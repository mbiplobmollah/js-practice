const person ={
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places' : ['bandarban', 'saintmartin', 'kuakata']
}
console.log(person)
// below is given dot notation
console.log(person.age)
// below is given bracket notation
console.log(person['name'])
console.log(person['fav places'])

// below is given variable declare of an object property
const income = person.salary
console.log(income)
person.salary = 30000;
person['age'] = 27
person['fav places'] = ['madives', 'bali', 'pataya']

console.log(person)

// different ways to change a property
const propName = 'profession'
person[propName] = 'devops'
console.log(person.profession)




