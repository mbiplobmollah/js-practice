const address= 'andorkilla';
const part = address.slice(2,5);
// console.log(part);

const sentence ='i am not a hardworking person so work harder.';
const check = sentence.split()
const check2 = sentence.split(' ') 
const check3 = sentence.split('a') 
// এর মানে হচ্ছে ব্রাকেট এর মদ্ধ্যে এমন মান দেওয়া লাগবে যেখান থেকে আলাদা করা লাগবে

// console.log(check)
// console.log(check2)
// console.log(check3)


const friend = 'Rahim,karim,jorim,fahim,morim,dhorim'
console.log(friend.split(','))

const realFriend = [ 'Rahim', 'karim', 'jorim', 'fahim', 'morim', 'dhorim' ];
console.log(realFriend.join('+'));
console.log(realFriend.join('|'));
console.log(realFriend.join(' '));
