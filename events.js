let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    alert("Donot click ok your computer will blast");
    document.querySelector(".box").innerHTML="<h1>You were pranked🤣</h1>"
})
document.addEventListener("dblclick",()=>{
    alert("Pleasse wait..........................")
    
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})