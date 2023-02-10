const container = document.querySelector(".container"),
notification = container.querySelector(".notification"),
wifiIcon = container.querySelector(".icon"),
title = container.querySelector(".details span"),
subtitle = container.querySelector(".details p"),
closeIcon = container.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); // creating new xml object;
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);  // sending get request to this url;
        xhr.onload = ()=>{  // once ajax is loaded
            if(xhr.status >= 200 && xhr.status < 300){  // if status is 200 or less than 300 , it means it getting response which means user is connected to internet;       
                notification.classList.remove("offline");
                title.innerText = "You're online now";
                subtitle.innerText = "Hurray! Internet is connected";

            }else{  // user is offline or getting something error
                offline();
            }

        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send();
    }
    function offline(){
        container.classList.remove("hide");
        notification.classList.add("offline");
        title.innerText = "You're offline now";
        subtitle.innerText = "Oops! Internet is not connected";

    }
    setInterval(()=>{
        ajax(); // calling the function
    },100)
}
closeIcon.onclick = ()=>{
    container.classList.add("hide");
}
setTimeout(()=>{
    container.classList.add("hide");
},5000)