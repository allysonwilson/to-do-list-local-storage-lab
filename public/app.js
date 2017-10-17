var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  for(item of todos){
    this.addItem(item);
  }
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
}

var handleButtonClick = function () {

  var inputBox = document.getElementById("new-item");
  var itemToAppend = inputBox.value
  addItem(itemToAppend);
  save(itemToAppend);
}

var save = function (newItem) {
  var jsonString = localStorage.getItem('todoList') || "[]";
  var savedDataArray = JSON.parse(jsonString);
  savedDataArray.push(newItem);
  var stringifiedArray = JSON.stringify(savedDataArray);
  localStorage.setItem('todoList', stringifiedArray);
}

window.addEventListener('load', init);
