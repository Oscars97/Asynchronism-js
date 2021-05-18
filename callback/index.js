'use strict'


const sum = (num1, num2) => num1+num2; //here we create a func that is going to receive 2 parameters
const subs = (num1, num2)=>num1-num2;
const calc = (num1, num2, callback)=>{ //now we are creating a func that is 
                                     //going to receive a 3 parameter:
                                     //The func that will be executed and the paramters needed.           
    return callback(num1,num2);
}

console.log(calc(1,2,sum));
console.log(calc(4,2,subs));


const date = (callback) =>{ //now we want to include a setTimeOut with 4 seconds to watch the 
                           // difference between the dates.
    console.log(new Date);
    setTimeout(()=>{
        let date = new Date();
        callback(date);
    },4000);
} 

const printTimeNow = (date)=>{
    console.log(date);
}

date(printTimeNow);