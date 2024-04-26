function redirectToPayment(option) {
  if (option === 'cash') {
    window.location.href = 'cashpay.html'; // Redirect to cashpay.html for cash on delivery
  } else if (option === 'debit') {
    window.location.href = 'debit_card_payment.html'; // Redirect to debit card payment page
  } else if (option === 'credit') {
    window.location.href = 'credit_card_payment.html'; // Redirect to credit card payment page
  }
  // Add more conditions for other payment options if needed
}

function showCardOptions() {
  var cardOptions = document.getElementById('card-options');
  if (cardOptions.style.display === 'none') {
    cardOptions.style.display = 'block';
  } else {
    cardOptions.style.display = 'none';
  }
}
