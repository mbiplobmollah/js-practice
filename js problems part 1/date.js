const today = new Date();
console.log(today)
const date = new Date('2062-10-09');
console.log(date)
const date1 = new Date('2062-10-19');
console.log(date1.getDay())
console.log(date1.getMonth())
console.log(date1.getFullYear())

const specificDate = new Date(2091, 0, 26)
console.log(specificDate)

specificDate.setMonth(10);
console.log(specificDate)
console.log(specificDate.toLocaleString())
console.log(specificDate.toLocaleString('en-GB'))

//unix epoc 

//moment js