// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Load tasks from Local Storage
    loadTasks(); // Call the function to load tasks when the page loads

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add each task to the DOM
    }

    // Function to add a new task
    const addTask = (taskText, save = true) => {
        if (!taskText) return; // Exit if taskText is empty

        // Create a new list item for the task
        const li = document.createElement('li'); // Create li element
        li.textContent = taskText; // Set the text content of the li to the task

        // Create a remove button for the task
        const removeButton = document.createElement('button'); // Create button element
        removeButton.textContent = "Remove"; // Set button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the li element from taskList when clicked
            removeTaskFromStorage(taskText); // Remove task from Local Storage
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);

        // Save to Local Storage if specified
        if (save) {
            saveTaskToStorage(taskText); // Save the task to Local Storage
        }

        // Clear the input field after adding the task
        taskInput.value = ""; 
    };

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve existing tasks
        storedTasks.push(taskText); // Add the new task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve existing tasks
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the task
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save the updated tasks back to Local Storage
    }

    // Attach event listeners
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get and trim the task input value
        addTask(taskText); // Call addTask when the button is clicked
    });

    // Add event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
            const taskText = taskInput.value.trim(); // Get and trim the task input value
            addTask(taskText); // Call addTask if Enter key is pressed
        }
    });
});