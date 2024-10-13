// Listen for the DOMContentLoaded event to ensure the HTML has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get and trim the task input value

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert if input is empty
            return; // Exit the function if no task is provided
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li'); // Create li element
        li.textContent = taskText; // Set the text content of the li to the task

        // Optionally add a class to the list item for styling
        li.classList.add('task-item'); // Add class for task styling

        // Create a remove button for the task
        const removeButton = document.createElement('button'); // Create button element
        removeButton.textContent = "Remove"; // Set button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the li element from taskList when clicked
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = ""; 
    };

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask when the button is clicked

    // Add event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
            addTask(); // Call addTask if Enter key is pressed
        }
    });
});