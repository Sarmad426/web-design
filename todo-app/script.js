document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  if (title.trim() === "") return;

  const li = document.createElement("li");
  li.className = "flex items-center justify-between p-2 border-b";
  li.innerHTML = `
          <span>${title}</span>
          <input type="checkbox" aria-label="Mark as completed" class="ml-4">
        `;
  document.getElementById("todo-list").appendChild(li);

  document.getElementById("title").value = "";

  li.querySelector('input[type="checkbox"]').addEventListener(
    "change",
    function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    }
  );
});
