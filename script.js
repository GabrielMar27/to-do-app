class Task {
  constructor(task, numbOfTasks) {
    this.task = task;
    this.numbOfTask = numbOfTasks;
  }

  createTask() {
    const addTask = document.createElement("div");
    const confirm = document.createElement("button");
    addTask.setAttribute("class", "task");
    addTask.setAttribute("id", "task" + this.numbOfTask);
    confirm.setAttribute("class", "confirm");
    confirm.setAttribute("id", "confirm" + this.numbOfTask);
    confirm.innerHTML = "complete";
    addTask.innerHTML = `${this.numbOfTask + 1}. ${this.task}`;
    addTask.value = this.task;
    //append the task to container
    taskContainer.appendChild(addTask);
    addTask.appendChild(confirm);
    confirm.addEventListener("click", () => {
      if (prompt("write yes to confirm") === "yes") {
        alert("task completed");
        addTask.remove();
      }
    });
  }
}
let taskContainer = document.querySelector("#taskContainer");
let taskInput = document.querySelector("#taskInput");
let removeAll = document.querySelector("#removeAll");
let numbOfTask = 0;
let tasks = document.querySelectorAll(".task");
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (taskInput.value === "") {
      alert("no task enterd");
    } else {
      const newTask = new Task(taskInput.value, numbOfTask);
      newTask.createTask();
      //reset the users input
      numbOfTask++;
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
      while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
      }
      taskContainer.innerHTML = "";
    }
  }
});
