// 아까 html 에서 <h1>00:00</h1> 건들꺼니까
// js-clock 클래스 안에서 한번 더 querySelector 로 h1 찾기
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText =
        ` ${ hours < 10 ? `0${hours}` : hours }:${ minutes < 10 ? `0${minutes}` : minutes}:${ seconds < 10 ? `0${seconds}` : seconds} `;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();




