//Variables------------------

const container = document.querySelector(".container");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const changeColor = document.querySelectorAll(".change");
const counterTitle = document.querySelector(".counter-title");
const countdownClock = document.querySelector("#countdown");
const refresh = document.querySelector(".fa-arrow-rotate-right");
const play = document.querySelector(".fa-circle-play");
const stop = document.querySelector(".fa-stop");

//Event Listeners------------------

dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);
stop.addEventListener("click", stopCounter);

//DarkMode Function------------------

function darkMode(){
    changeColor.forEach(function(item){
        item.style.color="white";
        container.style.backgroundColor="red"
        item.style.transition="all 1s";
        container.style.boxShadow="3px 3px 3px 0px red";
        countdownClock.style.color="white";
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

//stopCounter Function------------------



function stopCounter(){

}

//Timer------------------

const startingMinutes = 25;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    countdownClock.innerHTML = `${minutes}:${seconds}`;
        time--;
}

//


