// window.localStorage.setItem("todo", "value");
// let todoIt =  localStorage.getItem(todo);
// localStorage.removeItem(todo);
// localStorage.clear();
window.addEventListener("load", () => {
  const form = document.querySelector("#todoForm");
  //the form
  const input = document.querySelector("#newTodoInput");
  //the inputs
  const listEl = document.querySelector("#todos");
  //our list element
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = input.value;

    if (!todo) {
      alert("Please fill out the todo!");
      return;
    }else{
      localStorage.setItem(todo, input);
    }
    //form is submit form and e.priv to stop to refrech the page
    //if not task alert to fill out
    //It´s submits the form if it´s empty just return.
    const todoEl = document.createElement("div");
    //create dom element tex, div, input, button etc
    todoEl.classList.add("todo");
    //gives it a class to add it

    const todoContentEl = document.createElement("div");
    todoContentEl.classList.add("content");
    //giv a class to conent
    console.log(todo);
    // todoContentEl.innerText = todo;
    //set the todoContent innerText to todo

    todoEl.appendChild(todoContentEl);
    //this todoConentEl is the div and is set to the input value

    const todoInputEl = document.createElement("input");
    todoInputEl.classList.add("text");
    todoInputEl.type = "text";
    todoInputEl.value = todo;
    //the todo input values is equals to the input
    todoInputEl.setAttribute("readonly", "readonly");
    //set input to readonly

    todoContentEl.appendChild(todoInputEl);

    const todoActionEl = document.createElement("div");
    todoActionEl.classList.add("actions");
    //this is the actions to the buttons
    const todoEditEl = document.createElement("button");
    todoEditEl.classList.add("edit");
    todoEditEl.innerHTML = "Edit";
    document.getElementsByTagName("Edit").innerHTML = localStorage.getItem("todo");

    const todoDeleteEl = document.createElement("button");
    todoDeleteEl.classList.add("delete");
    todoDeleteEl.innerHTML = "Delete";

    todoActionEl.appendChild(todoEditEl);
    todoActionEl.appendChild(todoDeleteEl);
    //set the append to the actions element
    todoEl.appendChild(todoActionEl);
    //then set the actions element to the todos element
    listEl.appendChild(todoEl);
    //and then the todos element to the list so we can get this out.
    input.value = "";
    //set the input value to empty to stop us to get any error

    todoEditEl.addEventListener("click", (e) => {
      if (todoEditEl.innerText.toLowerCase() == "edit") {
        todoEditEl.innerText = "Save";
        todoInputEl.removeAttribute("readonly");
        todoInputEl.focus();
      } else {
        todoEditEl.innerText = "Edit";
        todoInputEl.setAttribute("readonly", "readonly");
      }
    });
    //do the buttons event so if the edit is clicked it will save
    todoDeleteEl.addEventListener("click", (e) => {
      listEl.removeChild(todoEl);
    });
  });
});
