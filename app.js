const container = document.querySelector(".container");
const body = document.querySelector("body");
const main = document.createElement("main");
const divInput = document.createElement("div");
const input = document.createElement("input");
const divBtn = document.createElement("div");
const btnCreate = document.createElement("button");
const newElement = document.createElement("div");
const mainContainer = document.createElement("div");
const mainTitle = document.querySelector(".todo-list-omeruta");

//main
body.append(main);
main.append(mainContainer);
mainContainer.setAttribute("class", "main-container");
mainContainer.append(mainTitle);
mainContainer.append(container);

//input
container.append(divInput);
divInput.append(input);
divInput.setAttribute("class", "div-input");
input.setAttribute("class", "input");
//btn create
container.appendChild(divBtn);
divBtn.appendChild(btnCreate);
divBtn.setAttribute("class", "div-btn");
btnCreate.textContent = "click to create";
btnCreate.setAttribute("class", "create");
//New elements
container.append(newElement);
newElement.setAttribute("class", "element");

//create when click
btnCreate.addEventListener("click", createElement);

function createElement() {
  //element to create
  const divlist = document.createElement("div");

  const task = document.createElement("h2");
  const btnRemove = document.createElement("button");
  const check = document.createElement("input");
  //append elements
  //   divlist.setAttribute("class", "todo-task");
  newElement.append(divlist);

  divlist.append(check);
  divlist.append(task);
  divlist.append(btnRemove);
  check.setAttribute("type", "checkbox");
  divlist.setAttribute("class", "todo");
  btnRemove.setAttribute("class", "remove");
  btnRemove.textContent = "del";
  task.textContent = input.value;
  //console.log(btnRemove);

  btnRemove.addEventListener("click", function () {
    divlist.classList.add = "transition-remove";

    divlist.remove();
  });
}

// remove.addEventListener("click", removeTask);
