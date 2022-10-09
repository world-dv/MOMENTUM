const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const mins = String(date.getMinutes()).padStart(2,"0");
    const secds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${mins}:${secds}`;
}

getClock();
setInterval(getClock, 1000); //1000ms