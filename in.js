const inputBox = document.querySelector(".input-box");
const todoitems = document.querySelector(".todo-items");
let todo = [];
let myTemp;

inputBox.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (myTemp) {
      myTemp.textContent = this.value;
      myTemp = "";
    } else {
      addElement(this.value);
    }
    inputBox.value = "";
  }
});

function addElement(item) {
  let myLi = document.createElement("li");
  myLi.className = "todo-item";

  let newUl = document.createElement("ul");
  newUl.className = "todo-iteam-actions list-rest d-none";
  myLi.appendChild(newUl);

  let newLi1 = document.createElement("li");
  newLi1.className = "ed-de";
  newLi1.textContent = "edit";

  newUl.appendChild(newLi1);
  //
  newLi1.addEventListener("click", function () {
    console.log(inputBox.value);

    inputBox.value = newSpan.textContent;

    myTemp = newSpan;
    console.log(myTemp)
  });
  //
  const newLi2 = document.createElement("li");
  newLi2.className = "ed-de";
  newLi2.textContent = "delete";
  newUl.appendChild(newLi2);

  const newInput = document.createElement("input");
  newInput.className = "todo-item-check";
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("onchange", "onCheckBoxClick(event)");
  myLi.appendChild(newInput);

  const newSpan = document.createElement("span");
  newSpan.className = "todo-item-text";
  newSpan.textContent = item;
  myLi.appendChild(newSpan);

  const newSpan1 = document.createElement("span");
  newSpan1.setAttribute("id", "span1");
  newSpan1.setAttribute("onclick", "shows(event)");
  newSpan1.textContent = "...";
  myLi.appendChild(newSpan1);
  todoitems.appendChild(myLi);
}
const button = document.querySelector(".button");
button.addEventListener("click", deleteli);
function deleteli(e) {
  todo = [];
  todoitems.innerHTML = "";
}

function onCheckBoxClick(e) {
  // console.log(e.target.nextSibling);
  let spanelm = e.target.nextElementSibling;
  if (e.target.checked == true) {
    spanelm.style.textDecoration = "line-through";
  } else {
    spanelm.style.textDecoration = "none";
  }
}

function shows(e) {
  const ulli = document.querySelectorAll(".todo-iteam-actions");
  const submenu = e.target.parentElement.firstElementChild;
  ulli.forEach(function (element) {
    element.classList.add("d-none");
  });
  submenu.classList.toggle("d-none");
  closeSubs.classList.remove("d-none");
}

const closeSubs = document.querySelector(".close_submenu");
closeSubs.addEventListener("click", closefun);

function closefun(){
  console.log(this)
  const itemss = document.querySelectorAll(".todo-iteam-actions");
  itemss.forEach(function(element){
    element.classList.add("d-none");
  });
  this.classList.add("d-none");
}


