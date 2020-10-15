const form = document.querySelector(".js-form"),
     input = form.querySelector("input"),
     greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser", 
     SHOWING_CN = "showing";

// 6. 로컬스토리지에 저장하고
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// 4. submit 엔터 이벤트 도착했다. event.preventDefault() 가 꼭 있어야하는게
// 잠시만 기다려봐 이 이벤트 집중좀 하게 다른 이벤트들을 잠시 멈춰주는 역할인데 
// 다시한번 정리해야될듯.  text 박스 값 갖고와서 paintGreeting 호출
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


// 3. html 에 보면 클래스명 js-form 에 showing css 클래스를 추가한다
// 얘 css 보면 display : block 이라고 되있어서 표시하는걸 blocking (막는..) 아니고
// 줄을 바꾸지 않고 좌측부터 우측까지 모든 영역을 차지하는거라고 한다. 
// 겉 블록이 있어야 뭔가 보이게끔 하나보다
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


// 5. 이름 뭐니? 하면서 입력할 수 있던 텍스트박스 remove 하고
// html 에 h4 태그 보이게끔 블록 추가해주고 (showing_cn) 텍스트 바꿔주고 
function paintGreeting(text){

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// 2. 로컬스토리지에 USER_LS(currentUser) 가 없으면
// 이름 물어보는 폼 (askForName) 호출하고
// 저장된게 있으면 Hello 누구누구 나오게 호출
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

// 1. loadName 호출
init();