document.addEventListener('DOMContentLoaded', function() {
  // Get query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  
  // Get the product details from the query parameters
  const name = urlParams.get('name');
  const cost = urlParams.get('cost');
  const src = urlParams.get('src');

  // Populate the cart item
  const cartItemContainer = document.getElementById('cart-items');
  const itemElement = document.createElement('div');
  itemElement.classList.add('cart-item');
  itemElement.innerHTML = `
    <img src="${src}" alt="${name}">
    <div>
      <h3>${name}</h3>
      <p>Cost: ${cost}</p>
      <button class="remove-item">Remove</button>
    </div>
  `;
  cartItemContainer.appendChild(itemElement);

  // Add event listener for removing items
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove the item from the DOM
      button.closest('.cart-item').remove();
      // Update the cartItems array and localStorage
      updateCart();
    });
  });

  // Function to update cartItems array and localStorage
  function updateCart() {
    const cartItems = Array.from(document.querySelectorAll('.cart-item')).map(item => {
      return {
        name: item.querySelector('h3').textContent,
        cost: item.querySelector('p').textContent.replace('Cost: ', ''),
        src: item.querySelector('img').src
      };
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Get the checkout button
  const checkoutButton = document.getElementById('checkout-button');

  // Add event listener for checkout button click
  checkoutButton.addEventListener('click', function() {
    // Redirect to the payment.html page
    window.location.href = 'payment.html';
  });
});

