const addTodo = document.querySelector(".addTodo input");
const btnAdd = document.querySelector(".addTodo button");
const listTodo = document.querySelector(".list");
const clearAll = document.querySelector(".pending button");
showTasks();
addTodo.onkeyup = () => {
    let inputField = addTodo.value;
    if(inputField.trim() != 0){
        btnAdd.classList.add("active");
    }else {
        btnAdd.classList.remove("active");
    }
}

btnAdd.onclick = () => {
    let inputField = addTodo.value;
    let getlocalstorage  = localStorage.getItem("New Todo");
    if(getlocalstorage == null){
        listArr = [];
    }else {
        listArr = JSON.parse(getlocalstorage);
    }
    listArr.push(inputField);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks() {
    let getlocalstorage  = localStorage.getItem("New Todo");
    if(getlocalstorage == null){
        listArr = [];
    }else {
        listArr = JSON.parse(getlocalstorage);
    }
    if(listArr.length == 0){
        clearAll.classList.add("clearAll");
    }else{
        clearAll.classList.remove("clearAll");
    }
    let pending = document.querySelector(".number");
    pending.textContent = listArr.length;
    let show = "";
    listArr.forEach((element, index) => {
        show += ` <li>${element} <span onclick="deleteTasks(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    listTodo.innerHTML = show;
    addTodo.value = "";
    localStorage.setItem("New Todo", JSON.stringify(listArr));
}

function deleteTasks(index){
    let getlocalstorage  = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

clearAll.onclick = () => {
    let getlocalstorage  = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalstorage);
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();

}

