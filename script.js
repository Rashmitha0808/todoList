//select the input box
//select boton
//to do list select to apend and delet

const inputBox = document.querySelector(".todo-input");
const addtodoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//even listeners
addtodoButton.addEventListener("click", addTodoItem);

//function
//responsiblity of this to be added to the button

//prevent the page load
function addTodoItem(event) {
  event.preventDefault();

  //name
  const todoName = inputBox.value;

  //so that blank to do will not add
  if (!todoName) {
    return;
  }

  //create new Element
  const newTodoDiv = document.createElement("div");

  //how to add class
  newTodoDiv.classList.toggle("todo");

  //create list item in that innertext you need to put input
  const newTODO = document.createElement("li");
  newTODO.innerText = todoName;
  newTODO.classList.toggle("todo-item");
  //toggle will add class and delete if not available

  //add it inside to div
  newTodoDiv.appendChild(newTODO);

  //button complete
  const completeButton = document.createElement("button");
  completeButton.innerText = "Completed";
  completeButton.classList.toggle("complete-btn");
  completeButton.onclick = martItChek; //TODO

  newTodoDiv.appendChild(completeButton);

  //delete complete
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.toggle("deleted-btn");
  deleteButton.onclick = deleteItem; //function of delete

  newTodoDiv.appendChild(deleteButton);

  //append to do list div botton to do item to the list
  toDoList.appendChild(newTodoDiv);
}

//2. task would be to clear the text field
inputBox.value = "";

function martItChek(event) {
  const parentElem = event.target.parentElement;
  const nameofTodoElem = parentElem.firstChild;

  nameofTodoElem.classList.toggle("completed");
}
function deleteItem(event) {
  console.log("delete items");
  console.log(event); //tocheck the events
  const parentElemt = event.target.parentElement;
  parentElemt.remove();
}
