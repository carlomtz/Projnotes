const { resolve } = require("app-root-path");

console.log("Webpack Working!! =D");
//codigo es6
//default parameters 
let show = (msg="No message given") => {
    console.log(msg)
}
show ();
//Async await 
function resolveAfter2Seconds(){
    return new Promise (resolve=>{
        setTimeout(()=>
        {
            resolve('resolved')
        }, 2000)
    });
}
//resolveAfter2Seconds().then(data=>{console.log(data)});

async function asyncCall(){
    console.log("Calling");
    const result =await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();