let promise= new Promise((resolve,reject)=>{
     if (Math.random()<0.5)
        resolve("less than 0.5")
    else
        reject("rejected")
})
promise.then((res)=>{console.log(res)}) //then is a method which take one argument function which is called when promise is resolved which is called when promiose is resolved
promise.catch((err)=>{console.log(err)}) //.catch is a method which take one argument function which is called when promise is rejected
// err and res are the values passed to resolve and reject respectively
