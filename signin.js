document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the phone number from the URL query parameter
    var urlParams = new URLSearchParams(window.location.search);
    var signUpPhoneNumber = urlParams.get('phone');

    // Get the phone number entered in the sign-in form
    var signInPhoneNumber = document.getElementById('phone').value;

    // Validate the phone number format
    var phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(signInPhoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return; // Exit function if phone number format is invalid
    }

    // Compare the phone numbers
    if (signUpPhoneNumber === signInPhoneNumber) {
      // Phone numbers match, redirect to another page or perform further actions
      // For demonstration, alert and redirect to another page
      alert('Phone numbers match! You can proceed.');
      // Redirect to another page
      window.location.href = "welcome.html";
    } else {
      // Phone numbers do not match, display an error message
      alert('Phone numbers do not match! Please check your number.');
    }
  });
});
