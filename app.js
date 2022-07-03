const container = document.querySelector(".container");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const changeColor = document.querySelectorAll(".change");
const counterTitle = document.querySelector(".counter-title");

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const doublePoint = document.querySelector(".dbl-point");

const refresh = document.querySelector(".fa-arrow-rotate-right");
const play = document.querySelector(".fa-circle-play");
const stop = document.querySelector(".fa-stop");

//Event Listeners------------------

dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);

//DarkMode Function------------------

function darkMode(){
    changeColor.forEach(function(item){
        item.style.color="white";
        container.style.backgroundColor="red"
        item.style.transition="all 1s";
        container.style.boxShadow="3px 3px 3px 0px red"
    })
}

//LightMode Function------------------

function lightMode(){
    changeColor.forEach(function(item){
        item.style.color="red";
        container.style.backgroundColor="white"
        item.style.transition="all 1s";
        container.style.boxShadow="3px 3px 6px 0px black"
    })
}

//Time------------------
hour.textContent= new Date().getHours();
if(new Date().getHours() === 0){
    
}
minute.textContent = new Date().getMinutes();
doublePoint.textContent = ":";



