 document.querySelector(".gchildcontainer").addEventListener("click",(e)=>{
            e.stopPropagation()
            alert("you clicked gchildcontainer")
        });
         document.querySelector(".childcontainer").addEventListener("click",(e)=>{
            e.stopPropagation()
            alert("you clicked childcontainer")
        });
         document.querySelector(".container").addEventListener("click",(e)=>{
            alert("you clicked container")
        });


        function getRandomColor(){
            let v1=Math.ceil(0 + Math.random()*255);
            let v2=Math.ceil(0 + Math.random()*255);
            let v3=Math.ceil(0 + Math.random()*255);
            return `rgb(${v1},${v2},${v3})`
        }

        setInterval(() => {
            document.querySelector(".container").style.backgroundColor = getRandomColor()
        }, 1000);

        setInterval(() => {
            document.querySelector(".childcontainer").style.backgroundColor = getRandomColor()
            
        }, 1000);

        setInterval(() => {
            document.querySelector(".gchildcontainer").style.backgroundColor = getRandomColor()
            
        }, 1000);