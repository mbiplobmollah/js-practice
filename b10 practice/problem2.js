function sendNotification(email){
    const array = email.split('@')
    const userName = array[0];
    const domainName = array[1];
    if(email.includes('@')){
        return (userName + ' sent you an email from ' + domainName);
    }
    else{
        return 'Invalid Email'
    }


}
const mail = sendNotification('zihad@gmail.com');
console.log(mail)