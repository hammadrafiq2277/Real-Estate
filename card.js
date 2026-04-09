function createCard(title,cName,views,monthsOld,duration,thumbNail){
    let strViews;
    
 if(views>1000000){
        strViews=views/1000000 + "M";
   }
   else if(views>1000){
        strViews=views/1000 + "K";
    }
    else{
        strViews=views;
    }
    let html=` <div class="container">
        <div class="card">
            <div class="image"><img src="${thumbNail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${strViews} views . ${monthsOld} months ago</p>

            </div>


        </div>
    </div>`

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html

}

createCard("Introduction to Backend | Sigma Web Dev vid# 02","CodewithHarry",727000,10,"27:43",
    "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q"
)

createCard("Introduction to Express | Sigma Web Dev vid# 79","CodewithHarry",67700000,13,"33:03","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyj5zbW_1qQ4rUw0KzObyXV4d_oNXaSYXCQ&s"

)
createCard("Introduction to Backend | Sigma Web Dev vid# 02","CodewithHarry",72,10,"27:43",
    "https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBOkIyACIrUQH4WItgmM-x89Ebw2Q"
)

createCard("Introduction to Django | Sigma Web Dev vid# 54","CodewithHarry",6000,3,"39:53","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyj5zbW_1qQ4rUw0KzObyXV4d_oNXaSYXCQ&s"

)