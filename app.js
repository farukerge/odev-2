const addNewTaskBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("list");
const inputField = document.getElementById("task");


//boostrap

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

var option = {
    animation: true,
    delay:2000,
}

function see() {
    for (var i = 0; i < toastList.length; i++){
        toastList[i].show();
    }
}



addNewTaskBtn.addEventListener("click", function () {
    if (task.value === "") {
        see()
    } else {
        const newTask = document.createElement("p");
        newTask.style.marginTop = "1.6rem";
        newTask.innerText = inputField.value;
        taskContainer.appendChild(newTask);
        inputField.value = "";
        newTask.addEventListener("click", function() {
        newTask.style.textDecoration = "line-through";
        })
        newTask.addEventListener("dblclick", function() {
        taskContainer.removeChild(newTask);
    })
    }
})

