
function  calculateSleepTime( times ) {
    let totalSeconds = 0;
    if(Array.isArray(times)){
        for(const check of times){
            if(typeof(check) !== 'number'){
                return "Invalid";
            }
        }
        }
    else{
        return "Invalid";
    }
    for(const time of times){
        totalSeconds = totalSeconds + time;
    }
    const seconds = totalSeconds % 60;
    const allMinute = (totalSeconds - seconds) / 60;
    const minute = allMinute % 60;
    const hour = Math.floor(allMinute / 60);
    
    let allTime ={};
    allTime.hour = hour;
    allTime.minute = minute;
    allTime.second = seconds;
    return allTime;
   
}

const time1 = calculateSleepTime([1000, 499, 519, 300]);
const time2 = calculateSleepTime([1000, 2000, 725]);
const time3 = calculateSleepTime([100, 3800]);
const time4 = calculateSleepTime([]);
const time5 = calculateSleepTime([5600]);
const time6 = calculateSleepTime([100, 3800, "90" ]);
console.log(time1,time2,time3,time4,time5,time6);
