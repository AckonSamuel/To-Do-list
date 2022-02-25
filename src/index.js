/* eslint-disable linebreak-style */
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';

populate();
form.addEventListener('submit', getAddedTodos);