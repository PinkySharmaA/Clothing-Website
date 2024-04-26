document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signup-form');
    var phoneInput = document.getElementById('phone');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Check if phone number is unique
      var phoneNumber = phoneInput.value;
      if (isPhoneNumberUnique(phoneNumber)) {
        // Redirect to signup page
        window.location.href = 'signup-page.html';
      } else {
        alert('Phone number already exists!');
      }
    });
  
    function isPhoneNumberUnique(phoneNumber) {
      // Simulated function to check if phone number is unique
      // You should implement your own logic here (e.g., AJAX request to server)
      // For demonstration purposes, assume it's unique if it's not empty
      return phoneNumber.trim() !== '';
    }
  
    // Set JavaScript-written text
    var javascriptText = document.getElementById('javascript-text');
  });
  