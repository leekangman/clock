const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';    

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);
   
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}



function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text) {
    
    // li 태그와 button 태그를 일단 생성해놓는다 
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    
    // 버튼 안에 들어가는 이모지 내용
    delBtn.innerHTML = "❌";

    // 함수랑 이벤트 연결
    delBtn.addEventListener("click", deleteToDo); 


    // text를 입력할 공간인 span 태그를 생성해놓는다 
    // div 를 사용한다면 텍스트 내용 엔터치고 버튼 이렇게 나와버림
    const span = document.createElement("span");

    // span 안에 입력한 텍스트 내용을 넣고
    span.innerText = text;
    
    const newId = toDos.length + 1;

    // li 리스트 태그에 span + button 을 자식으로 연결해주고
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    // 또 ul (toDoList) 태그 안에 자식을 방금 만든 li 로 연결해주고
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);      // 이렇게 사용
        
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();