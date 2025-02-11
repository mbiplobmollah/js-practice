const college ={
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college.unique.result.merit)

college.unique.result.merit = 'always top'
console.log(college['unique'].result.merit)
college.events[1] = 'shadhinota dibosh'
console.log(college.events)
console.log(college)
delete college.class
console.log(college)