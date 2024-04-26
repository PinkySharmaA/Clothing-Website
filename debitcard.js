document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('payment-form');
  const payButton = document.getElementById('pay-button');

  // Always enable the pay button
  payButton.disabled = false;

  // Function to handle form submission and redirect to payment confirmation page
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation here if needed

    // Redirect to payment confirmation page
    window.location.href = "payment_confirmation.html";
  });
});
