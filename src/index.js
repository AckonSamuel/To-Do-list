/* eslint-disable linebreak-style */
import './style.css';

import '@fortawesome/fontawesome-free/js/all.js';
import itera from './src/js_modules/functions.js';
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
]

itera(task);
