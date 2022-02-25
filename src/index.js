/* eslint-disable linebreak-style */
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

const task = [
  {
    description: 'eat',
    completed: false,
    index: 0,
  },
  {
    description: 'sleep',
    completed: true,
    index: 1,
  },
  {
    description: 'pray',
    completed: true,
    index: 2,
  },
  {
    description: 'read',
    completed: false,
    index: 3,
  },
  {
    description: 'laugh',
    completed: false,
    index: 4,
  },
];

const itera = () => {
  const list = document.querySelector('ul');
  task.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'job';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'status';
    const taskDescription = document.createElement('p');
    taskDescription.className = 'description';
    taskDescription.innerText = item.description;
    const ellipsis = document.createElement('i');
    ellipsis.classList.add('fa-solid', 'fa-ellipsis', 'fa-ellipsis-vertical');
    li.appendChild(checkBox);
    li.appendChild(taskDescription);
    li.appendChild(ellipsis);
    list.appendChild(li);
  });
};

itera();