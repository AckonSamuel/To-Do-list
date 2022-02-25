/* eslint-disable linebreak-style */
import { taskCompleted, taskEdit, updateValue } from './events.js';

class ToDoList {
  constructor() {
    this.taskList = [];
  }

  addTask(description) {
    const taskContainer = document.querySelector('ul');
    const id = taskContainer.children.length + 1;
    const li = document.createElement('li');
    li.className = 'job';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'status';
    checkBox.addEventListener('click', taskCompleted);
    const taskDescription = document.createElement('input');
    taskDescription.className = 'description';
    taskDescription.value = description;
    taskDescription.disabled = true;
    taskDescription.required = true;
    taskDescription.addEventListener('keydown', (event) => updateValue(event, this));
    const dotsContainer = document.createElement('span');
    dotsContainer.className = 'dots-container';
    const dots = document.createElement('i');
    dots.className = 'fa-solid fa-ellipsis-vertical';
    dotsContainer.appendChild(dots);
    dotsContainer.addEventListener('click', (event) => taskEdit(event, this));
    li.appendChild(checkBox);
    li.appendChild(taskDescription);
    li.appendChild(dots);
    taskContainer.appendChild(li);
    this.taskList.push({ id, description, completed: false });
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  completeTask(index) {
    this.taskList[index].completed = true;
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
    this.taskList = this.taskList.map((task, i) => (
      { index: i + 1, description: task.description, completed: task.completed }
    ));

    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  updateTaskDeskcription(index, value) {
    this.taskList[index].description = value;
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
const taskList = new ToDoList();
export default taskList;
