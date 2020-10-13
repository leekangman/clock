const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";    // css 에 있던 class 명칭

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); // classList 에 clicked 가 contain 해있는지? 

    if(hasClass) { 
        title.classList.add(CLICKED_CLASS);     // classList 에 clicked 클래스만 넣고
    } else {
        title.classList.remove(CLICKED_CLASS);  // 아니면 조심스럽게 clicked 클래스만 빼고 
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init(); 

