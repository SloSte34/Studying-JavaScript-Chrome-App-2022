const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function paintToDo(addedToDo) {
  const makeList = document.createElement("li");
  makeList.id = addedToDo.id;
  const makeSpan = document.createElement("span");
  const button = document.createElement("button");
  makeSpan.innerText = addedToDo.text;
  button.innerText = "Delete Task";
  button.addEventListener("click", deleteTodo);
  makeList.appendChild(makeSpan);
  makeList.appendChild(button);
  toDoList.appendChild(makeList);
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const addToDo = toDoInput.value;
  toDoInput.value = "";
  const addToDoObj = {
    text: addToDo,
    id: Date.now(),
  };
  toDos.push(addToDoObj);
  paintToDo(addToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
