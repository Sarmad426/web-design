document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Cardholder Name validation
    const cardholderName = document.getElementById("cardholderName");
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    if (!nameRegex.test(cardholderName.value.trim())) {
      showError(
        cardholderName,
        "Please enter a valid name (at least 3 characters)."
      );
      valid = false;
    } else {
      showSuccess(cardholderName);
    }

    // Credit Card Number validation
    const cardNumber = document.getElementById("cardNumber");
    const cardNumberRegex = /^(\d{4}[- ]?){3}\d{4}$/;
    if (!cardNumberRegex.test(cardNumber.value.trim())) {
      showError(cardNumber, "Please enter a valid card number (16 digits).");
      valid = false;
    } else {
      showSuccess(cardNumber);
    }

    // Expiry Date validation
    const expiryDate = document.getElementById("expiryDate");
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiryDate.value.trim())) {
      showError(expiryDate, "Please enter a valid expiration date (MM/YY).");
      valid = false;
    } else {
      showSuccess(expiryDate);
    }

    // CVV validation
    const cvv = document.getElementById("cvv");
    const cvvRegex = /^[0-9]{3,4}$/;
    if (!cvvRegex.test(cvv.value.trim())) {
      showError(cvv, "Please enter a valid CVV (3 or 4 digits).");
      valid = false;
    } else {
      showSuccess(cvv);
    }

    // Billing Address validation
    const billingAddress = document.getElementById("billingAddress");
    if (billingAddress.value.trim().length < 5) {
      showError(billingAddress, "Please enter a valid billing address.");
      valid = false;
    } else {
      showSuccess(billingAddress);
    }

    // ZIP/Postal Code validation
    const zipCode = document.getElementById("zipCode");
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!zipRegex.test(zipCode.value.trim())) {
      showError(zipCode, "Please enter a valid ZIP/Postal code.");
      valid = false;
    } else {
      showSuccess(zipCode);
    }

    if (valid) {
      alert("Payment Submitted Successfully!");
    }
  });

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");
  input.classList.remove("success");
  input.classList.add("error");
  errorMessage.textContent = message;
  errorMessage.style.visibility = "visible";
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");
  input.classList.remove("error");
  input.classList.add("success");
  errorMessage.style.visibility = "hidden";
}
