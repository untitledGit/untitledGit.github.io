document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const loginModal = document.getElementById("loginModal");
  const overlay = document.getElementById("overlay");
  const closeModal = document.getElementById("closeModal");

  // Show the login modal
  loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
    overlay.style.display = "block";
  });

  // Close the login modal
  closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
    overlay.style.display = "none";
  });

  // Close the modal when clicking outside of it
  overlay.addEventListener("click", () => {
    loginModal.style.display = "none";
    overlay.style.display = "none";
  });

  // Hardcoded credentials (for demonstration purposes only)
  const credentials = {
    "user1": "password1",
    "user2": "password2",
    "admin": "admin123"
  };

  // Add login form submission handling
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if the entered credentials match any in the object
    if (credentials[username] && credentials[username] === password) {
      // Successful login
      alert("Successful login");
      document.getElementById("loginButton").style.display = "none"; // Remove login button
      document.getElementById("loginModal").style.display = "none"; // Close modal
      document.getElementById("overlay").style.display = "none"; // Hide overlay
      errorMessage.style.display = "none"; // Hide error message
    } else {
      // Incorrect login
      errorMessage.textContent = "login/password not correct"; // Set error message
      errorMessage.style.display = "block"; // Show error message
    }
  });
});