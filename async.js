async function getData (){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let rn = Math.random();
            if(rn<0.5){
                resolve(404)
            }
            else{
                reject(505)
            }
        },2000);
    })
}
async function main() {
 console.log("loading modules");
 console.log("fateching data")


 let data = await getData("hello");

 console.log(data)

  console.log("hammad");
  console.log("nouman");
}

main();


                    // Dummy API practice

async function myApi(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function mainII(){
    console.log("fetching API")
    console.log("please wait")

    let data = await myApi()
    console.log(data)
}

mainII()
