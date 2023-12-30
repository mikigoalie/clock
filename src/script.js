const numberHours = document.querySelector('.number-hours')
const barSeconds = document.querySelector('.bar-seconds')
const numberElement = [];
const barElement = [];

for (let i=1; i<=12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    )
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""))

for (let i=1; i<=60; i++) {
    barElement.push(
        `<span style="--index:${i}"><p></p></span>`
    )
}

barSeconds.insertAdjacentHTML('afterbegin', barElement.join(''));



const seconds = document.querySelector('.hands-box .seconds')
const minutes = document.querySelector('.hands-box .minutes')
const hours = document.querySelector('.hands-box .hours')

const setTime = () => {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    currentHours = (currentHours % 12) || 12;
    currentMinutes = currentMinutes || 60;
    currentSeconds = currentSeconds % 60;


    console.log(currentHours, currentMinutes, currentSeconds)

    hours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    minutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    seconds.style.transform = `rotate(${currentMinutes * 6}deg)`;
    setTimeout(setTime, 1000)
} 
setTime();