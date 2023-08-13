document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('new-task');
    const inputTask = document.getElementById('input-task');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the value of the input field
        const taskName = inputTask.value.trim();

        if (taskName !== '') {
            // Create a new task
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('check');

            const taskSpan = document.createElement('span');
            taskSpan.classList.add('task-name');
            taskSpan.textContent = taskName;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            // Add event listener to the delete button
            deleteBtn.addEventListener('click', function() {
                taskItem.remove();
            });

            // Append elements to the task item
            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskSpan);
            taskItem.appendChild(deleteBtn);

            // Append the task item to the task list
            taskList.appendChild(taskItem);

            // Clear the input field
            inputTask.value = '';
        }

    });

});
