function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("form-response");

  if (name && email && message) {
    response.textContent = "Thank you for contacting us!";
    return false; // Prevent form reload
  } else {
    response.textContent = "Please fill all fields.";
    response.style.color = "red";
    return false;
  }
}
function submitRegistration() {
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const course = document.getElementById("reg-course").value;
  const response = document.getElementById("reg-response");

  if (name && email && phone && course) {
    response.textContent = "Registration successful! We'll contact you soon.";
    response.style.color = "green";
    return false;
  } else {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
    return false;
  }
}

