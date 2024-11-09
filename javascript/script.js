
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Predefined test credentials
const testUsers = [
    { email: "testuser1@example.com", password: "password123" },
    { email: "testuser2@example.com", password: "password456" }
];

// Function to validate the form
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    errorMessage.style.display = "none";
    errorMessage.innerText = "";

    // Check if email is empty or in incorrect format
    if (!email) {
        errorMessage.innerText = "Please enter your email.";
        errorMessage.style.display = "block";
        return false;
    } else if (!validateEmail(email)) {
        errorMessage.innerText = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false;
    }

    // Check if password is empty
    if (!password) {
        errorMessage.innerText = "Please enter your password.";
        errorMessage.style.display = "block";
        return false;
    }

    // Check if the email and password match any predefined user
    const user = testUsers.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        alert("Login successful!");
        console.log("Redirecting...");
        // Fix the redirect path - make sure this path is correct relative to your login page
        window.location.href = "./coming-soon.html";
        return false; // Changed to false to prevent form submission
    } else {
        errorMessage.innerText = "Invalid email or password.";
        errorMessage.style.display = "block";
        return false;
    }
}











