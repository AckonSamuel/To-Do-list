/* eslint-disable linebreak-style */
import { taskCompleted } from './events.js';

class toDoList {
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
    checkBox.addEventListener('click', taskDone);
    const taskDescription = document.createElement('input');
    taskDescription.className = 'description';
    taskDescription.value = description;
    taskDescription.disabled = true;
    taskDescription.required = true;
    taskDescription.addEventListener('keydown', (event) => updateValue(event, this));
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa-solid', 'fa-ellipsis', 'fa-ellipsis-vertical');
    checkBox.addEventListener('submit', taskCompleted);
    ellipsis.addEventListener('click', (event) => taskEdit(event, this));
    li.appendChild(checkBox);
    li.appendChild(taskDescription);
    li.appendChild(ellipsis);
    taskContainer.appendChild(li);
    this.taskList.push({ id, description, completed: false });
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  completeTask(index) {
    this.taskList[index].completed = true;
  }
}
export default toDoList;