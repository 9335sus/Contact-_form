document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting

    let valid = true;

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    // Name validation
    if (name.length < 3) {
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email validation (simple regex)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Message validation
    if (message.length < 10) {
        messageError.style.display = "block";
        valid = false;
    } else {
        messageError.style.display = "none";
    }

    // If valid, show success message
    if (valid) {
        successMessage.textContent = "Your message has been sent successfully!";
        // Reset form
        document.getElementById("contactForm").reset();
    } else {
        successMessage.textContent = "";
    }
});
