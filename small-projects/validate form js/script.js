function validateForm() {
  var bookingReference = document.getElementById("bookingReference").value;
  var errorMessage = document.getElementById("error-message");

  // Regular expression for validation
  var regex = /^[A-Z]{3}\/\d{6}$/;

  if (bookingReference.match(regex)) {
    // Form is valid, show success alert
    alert("Form submitted successfully!");
    errorMessage.innerHTML = "";
  } else {
    // Display error message
    errorMessage.innerHTML =
      "Invalid Booking Reference. Please enter a valid reference (e.g., ABC/123456).";
  }
}
