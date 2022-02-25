/* eslint-disable linebreak-style */
import './style.css';

import '@fortawesome/fontawesome-free/js/all.js';
import { showToDoList } from './modules/functions.js';
import taskList from './modules/jobList.js';
import { taskAdd } from './modules/events.js';

document.querySelector('#task').addEventListener('keypress', (event) => taskAdd(event, taskList));
document.querySelector('#enter').addEventListener('click', (event) => taskAdd(event, taskList));
showToDoList();