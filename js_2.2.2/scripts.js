const delay=4000 // milliseconds, 1s
//callback hell
//disadvantages:-
/*
1. very complex
1. difficult to understand
3. nesting and redundancy

setTimeout(()=>{
    console.log("data:",1) //4s
})
setTimeout(()=>{
    console.log("data:",2)
setTimeout(()=>{
    console.log("data:",3)
}, delay)
}, delay)
*/
function getdata(data, getmoredata)
{
    setTimeout(()=>{
        console.log("data:", data)
        getmoredata()
    }, delay)
}
getdata(1, ()=>{
    getdata(2,()=>{
        getdata(3,
            ()=>{})
 })
    })