document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for form submission
    var enrollmentForm = document.getElementById("enrollmentForm");
    enrollmentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        // Validate form data (you can add more validation as needed)
        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Display submitted information
        var message = "Enrollment Information:\n\nName: " + name + "\nEmail: " + email;
        alert(message);

        // You can add code here to send the form data to a server, store it in a database, etc.
    });
});
