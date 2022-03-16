const btnAddTodo = document.getElementById("btn-add-todo");
const inputAddTodo = document.getElementById("input-add-todo");
const todoContainer = document.getElementById("new-todos-container");

btnAddTodo.addEventListener("click", addTodo);

function generateTodo(text){
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  let newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";

  let newP = document.createElement("p");
  newP.appendChild(document.createTextNode(text));

  let newTrash = document.createElement("button");
  newTrash.appendChild(document.createTextNode("Excluir"));

  newTodo.appendChild(newCheckbox);
  newTodo.appendChild(newP);
  newTodo.appendChild(newTrash);

  return newTodo;
}

function addTodo(){
  let text = inputAddTodo.value;
  let newTodo = generateTodo(text)
  todoContainer.appendChild(newTodo);
}
