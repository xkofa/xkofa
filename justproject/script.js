document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();
    
    // Validate that all fields are filled
    if (!fullName || !email || !country || !comments) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    
    // Simple email validation (basic check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // If all good, show success alert
    alert('Form submitted successfully!');
    
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});