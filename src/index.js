/* eslint-disable linebreak-style */
import './style.css';

import '@fortawesome/fontawesome-free/js/all.js';
import { showToDoList } from './modules/functions.js';
import taskList from './modules/jobList.js';
import { taskAdd, removeCompleted } from './modules/events.js';

document.querySelector('#list-add').addEventListener('keypress', (event) => taskAdd(event, taskList));
document.querySelector('#enter').addEventListener('click', (event) => taskAdd(event, taskList));
document.querySelector('#clear').addEventListener('click', (event) => removeCompleted(event, taskList));
showToDoList();