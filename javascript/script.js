function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessageDiv = document.getElementById('error-message');

    // Clear previous error messages
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    // Basic validation
    if (!email || !password) {
        errorMessageDiv.textContent = "Please enter all mandatory fields.";
        errorMessageDiv.style.display = 'block'; 
        return false; // Prevent form submission
    }

    // Simulated user data for verification
    const users = [
        { email: 'khanyisilemesha@gmail.com', password: 'password123' },
        { email: 'admin@example.com', password: 'adminpass' }
    ];

    // Verify credentials
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        errorMessageDiv.textContent = "Invalid email or password.";
        errorMessageDiv.style.display = 'block'; 
        return false; // Prevent form submission
    }

    // If credentials are correct, redirect to the coming soon page
    window.location.href = "coming-soon.html"; 

    return true; 
}





