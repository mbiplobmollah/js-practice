const biryaniKhor = ['abul', 'babul','cabul','abul','babul','dabul','kabul','cabul']
const number = [1,3,56,87,4,1,44,2,3,56,44]


function biriyani(names){
    const unique = [];
    for(const name of names){
        if(unique.includes(name) == false){
            unique.push(name)
        }
    }
    return unique
}

const allName = biriyani(biryaniKhor);
console.log('The people who will get biriyani : ',allName)
