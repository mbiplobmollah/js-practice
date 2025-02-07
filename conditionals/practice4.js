var myScore = 90 ;
var myFriendScore = 39 ;


if (myScore > 80) {
    if (myFriendScore > 80)
        {
            console.log('Go for launch.')
        }
        else{
            if (myFriendScore >= 60){
            console.log('good luck next time.')
            }
        else{
            if(myFriendScore >= 40){
                console.log('keep your friends message unseen.')
            }
            else{           
                    console.log('block your friend')
            }
        }
        }
}
else
    {
        console.log('Go Home and sleep and act sad');
    }


// avoid deep nesting just use one nesting and use else if for better optimized code below code is taken from chatgpt and above is mycode
/*
var myScore = 90;
var myFriendScore = 39;

if (myScore > 80) {
    if (myFriendScore > 80) {
        console.log('Go for lunch.');
    } else if (myFriendScore >= 60) {
        console.log('Good luck next time.');
    } else if (myFriendScore >= 40) {
        console.log('Keep your friend’s message unseen.');
    } else {
        console.log('Block your friend.');
    }
} else {
    console.log('Go home, sleep, and act sad.');
}

*/