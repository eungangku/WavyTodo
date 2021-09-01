const clock = document.querySelector("#clock");

function getTime() {
    const timeNow = new Date();
    const hours = String(timeNow.getHours()).padStart(2, "0");
    const minutes = String(timeNow.getMinutes()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}`
}

getTime();
setInterval(getTime, 1000);