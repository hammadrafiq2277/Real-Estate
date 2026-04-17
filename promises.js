console.log("Promises lecture")

let prom1=new Promise((resolve, reject) => {

    let a= Math.random();
    if(a < 0.5){
        reject("Sorry your system is not supporting")
    }
    else{
        setTimeout(() => {
        console.log("Please wait.........")
        resolve("DONE....")
    }, 2000);
    }
})

// prom.then ((a)=>{
//     console.log(a)
// }) .catch ((err) => {
//     console.log(err)
// })


let prom2=new Promise((resolve, reject) => {

    let a= Math.random();
    if(a < 0.5){
        reject("Sorry your system is yet not supporting")
    }
    else{
        setTimeout(() => {
        console.log("Please wait for 2 minutes")
        resolve("Congrats..")
    }, 2000);
    }
    
})

p3 = Promise.allSettled( [prom1 , prom2])
p3.then ((a)=>{
    console.log(a)
}).catch ((err) =>{
    console.log(err)
})

// p3 = Promise.all( [prom1 , prom2 ])
// p3.then ((a)=>{
//     console.log(a)
// }).catch ((err) =>{
//     console.log(err)
// })