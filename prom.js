let promise1 = new Promise ((resolve , reject) =>{
    let rn = Math.random();
    let a = prompt ("Enter a number");
    let opp = prompt("Enter operator");
    let b = prompt ("Enter second number");

    if(rn < 0.5){
        if (opp == '+'){
            resolve("The correct addition is ",a+b)
            console.log("correct")
        }

        else if (opp == '-'){
            resolve("The correct subtraction is ",a-b)
            console.log("correct")
        }

        else if (opp == '*'){
            resolve("The correct Multi is ",a*b)
            console.log("correct")
        }

        else{
            resolve("The correct division is ",a/b);
            console.log("correct")
        }

        }

        else {
            resolve("Enter apropriate operator")
            console.log("opertor error 1")
        }
        console.log(rn)
    
});



let promise2 = new Promise ((resolve , reject) =>{
    let rn = Math.random();
    let a = prompt ("Enter a number");
    let opp = prompt("Enter operator");
    let b = prompt ("Enter second number");

    if(rn < 0.5){
        if (opp == '+'){
            resolve("The wrong addition is ",a+b)
            console.log("wrong")
        }

        else if (opp == '-'){
            resolve("The wrong subtraction is ",a-b)
            console.log("wrong")
        }

        else if (opp == '*'){
            resolve("The wrong Multi is ",a*b)
            console.log("wrong")
        }

        else{
            resolve("The wrong division is ",a/b);
            console.log("wrong")
        }

        }

        else {
            resolve("Enter apropriate operator");
            console.log("opeator error 2")
        }
    console.log(rn)
});


promise3 = Promise.allSettled([promise1 , promise2])
promise3.then((a) =>{
    console.log(a)
}).catch((err) =>{
    console.log(err)
})