document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById("todo-list");

  // Fetch todos from the API
  fetch("http://127.0.0.1:8000")
    .then((response) => response.json())
    .then(({ todos }) => {
      todos.forEach((todo) => {
        // Create list item element
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;

        // Add completed class if todo is completed
        if (todo.completed) {
          listItem.classList.add("completed");
        }

        // Append list item to the todo list
        todoList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
});
