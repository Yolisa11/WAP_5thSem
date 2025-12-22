async function getdata(data)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data:", data)
        resolve("success")
      
    },1000)
})
}
// must use await only inside async function
await getdata(1)
await getdata(2)
await getdata(3)
