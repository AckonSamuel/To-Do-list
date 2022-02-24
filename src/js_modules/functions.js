/* eslint-disable linebreak-style */
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
    })
}

export default itera();