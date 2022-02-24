/* eslint-disable linebreak-style */

class jobList {
  constructor() {
    this.task = [];
  }

  addJob(description) {
    const list = document.querySelector('ul');
    const id = list.children.length + 1;
    const li = document.createElement('li');
    li.className = 'job';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'status';
    const taskDescription = document.createElement('input');
    taskDescription.className = 'description';
    taskDescription.value = description;
    taskDescription.disabled = true;
    taskDescription.required = true;
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa-solid', 'fa-ellipsis', 'fa-ellipsis-vertical');
    li.appendChild(checkBox);
    li.appendChild(taskDescription);
    li.appendChild(ellipsis);
    list.appendChild(li);
    this.taskList.push({ id, description, completed: false });
    window.localStorage.setItem('list', JSON.stringify(this.taskList));
  }

  completeTask(index) {
    this.taskList[index].completed = true;
  }
}
export default jobList;