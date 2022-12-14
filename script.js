let numbOfTask = 0;
class Task {
  constructor(task, numbOfTasks) {
    this.task = task;
    this.numbOfTask = numbOfTasks;
  }

  createTask() {
    const addTask = document.createElement("div");
    const confirm = document.createElement("i");
    addTask.setAttribute("class", "task");
    addTask.setAttribute("id", "task" + this.numbOfTask);
    confirm.setAttribute("class", "confirm");
    confirm.setAttribute("class", "fa fa-check");
    confirm.setAttribute("id", "confirm" + this.numbOfTask);

    addTask.innerHTML = `${this.numbOfTask + 1}. ${this.task}`;
    addTask.value = this.task;
    //append the task to container
    taskContainer.appendChild(addTask);
    addTask.appendChild(confirm);
    numbOfTask++;
    confirm.addEventListener("click", () => {
      if (prompt("write yes to confirm") === "yes") {
        alert("task completed");
        addTask.remove();
        numbOfTask--;
      }
    });
  }
}
let taskContainer = document.querySelector("#taskContainer");
let taskInput = document.querySelector("#taskInput");
let removeAll = document.querySelector("#removeAll");

let tasks = document.querySelectorAll(".task");
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (taskInput.value === "") {
      alert("no task enterd");
    } else {
      const newTask = new Task(taskInput.value, numbOfTask);
      newTask.createTask();
      //reset the users input
      taskInput.value = "";
    }
  }
});
removeAll.addEventListener("click", () => {
  if (!taskContainer.firstChild) {
    alert("no task to delete");
  } else {
    if (prompt("write yes to confirm") === "yes") {
      alert("tasks deleted");
      numbOfTask = 0;
      while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
      }
      taskContainer.innerHTML = "";
    }
  }
});
