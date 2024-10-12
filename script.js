// Listen for the DOMContentLoaded event to ensure the HTML has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get and trim the task input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert if empty
            return; // Exit the function if no task
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Button text
        removeButton.className = 'remove-btn'; // Add class for styling
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the list item on button click
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        taskList.appendChild(li); // Add the list item to the task list

        taskInput.value = ""; // Clear the input field after adding the task
    };

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on Enter key press
        }
    });
});