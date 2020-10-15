const body = document.querySelector("body"); // body

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image(); 
    image.src = `images/${imgNumber + 1}.jpg`; 
    image.classList.add("bgImage"); // ★ bgimage class 추가 
    body.prepend(image); 
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom(); // 랜덤 숫자 생성해서
    paintImage(randomNumber); // 숫자.jpg 를 표시하러
}

init();