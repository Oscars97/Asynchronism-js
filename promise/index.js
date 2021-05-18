const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Great!");
        }else{
            reject("Something has failed")
        };
    })
};
somethingWillHappen()
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))


const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => {
                resolve("After 3 seconds: \nGreat again!")
            }, 3000);
        }else{
            const error = new Error("WRONG!")
            reject(error);
        }
    })
}
somethingWillHappen2()
    .then((res)=>console.log(res))
    .catch((err) =>console.error(err))
