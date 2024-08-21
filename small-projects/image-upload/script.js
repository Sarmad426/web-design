document.addEventListener("DOMContentLoaded", function () {
  const uploadForm = document.getElementById("upload-form");
  const imageInput = document.getElementById("image-input");
  const imageContainer = document.getElementById("image-container");

  // Function to handle form submission
  uploadForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const file = imageInput.files[0];
    if (!file) return; // No file selected

    // Read the uploaded image file as a data URL
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;

      // Store the image URL in localStorage
      const imageKey = "uploaded_image_" + Date.now();
      localStorage.setItem(imageKey, imageUrl);

      // Display the uploaded image on the page
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.classList.add("uploaded-image");
      imageContainer.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  });

  // Display previously uploaded images from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("uploaded_image_")) {
      const imageUrl = localStorage.getItem(key);
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.classList.add("uploaded-image");
      imageContainer.appendChild(imgElement);
    }
  }
});
