var age = 25;
var student = false;

if (age < 10) {
    console.log('Ticket is free');
} 
else if (age >= 60) {  // Senior citizen check before student check
    console.log('15% discount');
} 
else if (student === true) {  // Now student check happens after seniors
    console.log('50% discount');
} 
else {
    console.log('Ticket fare 800 tk');
}