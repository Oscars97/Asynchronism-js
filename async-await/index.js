const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() =>{
            resolve("Great!");
        },3000 )
        : reject(new Error("Wrong"));
    });
}

const doSomething = async()=>{
    const something = await doSomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething();
console.log("After");

const anotherFunct = async() =>{
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error){
        console.log(error);
    }
}
console.log('Before2');
anotherFunct();
console.log("After2");