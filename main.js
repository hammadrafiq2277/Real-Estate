// document.querySelector(".container").outerHTML
// '<div class="container">\n  <div class="box">hello i am a box</div>\n   <div class="box">hello i am a box</div>\n   </div>'
// document.querySelector(".box").outerHTML
// '<div class="box">hello i am a box</div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".box").tagName
// 'DIV'
// document.querySelector(".container").textContent
// '\n        hello i am a box\n        hello i am a box\n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden=true
// true
// document.querySelector(".container").classList.toggle("carton")
// false
// document.querySelector(".container").classList.toggle("carton")
// true


let div=document.createElement("div");
div.setAttribute("class","snd-box");
div.innerHTML="This box is Inserted <b> through javascript</b>";
document.querySelector(".container").append(div); //add at last of box.
document.querySelector(".container").prepend(div); //add at start of box.
document.querySelector(".container").before(div);  // add before container.
document.querySelector(".container").after(div);   // add after container.

let str=document.querySelector(".container");
str.insertAdjacentHTML("beforebegin","<h1>hi i am html string </h1>");



const funct=(a,b)=>{
    console.log(a+b)
}
funct(21,21);
funct(21,33);funct(91,21);funct(981,21);funct(44,21);
