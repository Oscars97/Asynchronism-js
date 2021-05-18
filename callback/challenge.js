const XMLHttpRequest = require('XMLHttpRequest').XMLHttpRequest;
const api = "https://rickandmortyapi.com/api/character/"; 

const fetchData = (url, callback) =>{
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = (e) =>{
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error("Error "+url);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(api, (error1, data1)=>{
    if(error1) return console.error(error1);
    fetchData(api+data1.results[0].id, (error2, data2)=>{
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3)=>{
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});
