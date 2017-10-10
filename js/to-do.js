"use strict";

var url = "https://api.myjson.com/bins/9l2ez";

fetch(url).then(function (response) {
  response.json().then(function (data) {
    var elements = document.getElementById("to-do");
    var list = document.createElement("ul");

    elements.appendChild(list);

    for (var i = 0; i < data.todos.length; i++) {
      var element = document.createElement("li");
      var textElem = document.createTextNode(data.todos[i].label);

      if (data.todos[i].complete) {
        element.classList.add("checked");
      }
      element.addEventListener("click", function () {
        this.classList.toggle("checked");
      });

      element.appendChild(textElem);
      list.appendChild(element);
    }
  });
}).catch(function (error) {
  console.log(error.message);
});
