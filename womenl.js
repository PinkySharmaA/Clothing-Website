document.addEventListener('DOMContentLoaded', function() {
  // Get query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  
  // Get the product details from the query parameters
  const src = urlParams.get('src');
  const name = urlParams.get('name');
  const cost = urlParams.get('cost');
  const rating = urlParams.get('rating');
  const cod = urlParams.get('cod');
  const machineWashable = urlParams.get('machineWashable');
  const returnPolicy = urlParams.get('returnPolicy');
  const fabricDetails = urlParams.get('fabricDetails');

  // Populate the enlarged image and product details
  const enlargedImage = document.getElementById('enlarged-img');
  const productName = document.getElementById('product-name');
  const productCost = document.getElementById('product-cost');
  const productRating = document.getElementById('product-rating');
  const cashOnDelivery = document.getElementById('cash-on-delivery');
  const machineWashablePara = document.getElementById('machine-washable');
  const returnPolicyPara = document.getElementById('return-policy');
  const fabricDetailsPara = document.getElementById('fabric-details');

  const buyNowButton = document.getElementById('buy-now-button');
  const addToCartButton = document.getElementById('add-to-cart-button');

  enlargedImage.src = src;
  enlargedImage.alt = name;
  productName.textContent = name;
  productCost.textContent = 'Cost: ' + cost;
  productRating.textContent = 'Rating: ' + rating;
  cashOnDelivery.textContent = 'Cash on Delivery: ' + cod;
  machineWashablePara.textContent = 'Machine Washable: ' + machineWashable;
  returnPolicyPara.textContent = 'Return Policy: ' + returnPolicy;
  fabricDetailsPara.textContent = 'Fabric Details: ' + fabricDetails;

  // Add event listener to the Buy Now button
  buyNowButton.addEventListener('click', function() {
    // Redirect to payment.html when Buy Now button is clicked
    window.location.href = 'payment.html';
  });

  // Add event listener to the Add to Cart button
  addToCartButton.addEventListener('click', function() {
    // Redirect to cart.html when Add to Cart button is clicked
    window.location.href = 'cart.html';
  });
});

  