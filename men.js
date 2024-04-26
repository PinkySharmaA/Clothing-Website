document.addEventListener('DOMContentLoaded', function() {
  // Define product data for each category
  var productsData = {
    'shirts': [
      { name: 'Shirt 1', image: 'shirt1.jpg', cost: '$20' },
      { name: 'Shirt 2', image: 'shirt2.jpg', cost: '$25' },
      { name: 'Shirt 3', image: 'shirt3.jpg', cost: '$25' },
      { name: 'Shirt 4', image: 'shirt4.jpg', cost: '$25' },
      { name: 'Shirt 13', image: 'shirt13.jpg', cost: '$25' },
      { name: 'Shirt 6', image: 'shirt6.jpg', cost: '$25' },
      { name: 'Shirt 15', image: 'shirt15.jpg', cost: '$25' },
      { name: 'Shirt 13', image: 'shirt13.jpg', cost: '$25' },
      { name: 'Shirt 9', image: 'shirt9.jpg', cost: '$25' },
      { name: 'Shirt 10', image: 'shirt10.jpg', cost: '$25' },
      { name: 'Shirt 11', image: 'shirt11.jpg', cost: '$25' },
      { name: 'Shirt 12', image: 'shirt12.jpg', cost: '$25' },
      // Add more shirt data as needed
    ],
    'tshirts': [
      { name: 'T-Shirt 1', image: 'tshirt1.jpg', cost: '$15' },
      { name: 'T-Shirt 2', image: 'tshirt2.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'tshirt3.jpg', cost: '$18' },
      { name: 'T-Shirt 4', image: 'tshirt4.jpg', cost: '$18' },
      { name: 'T-Shirt 7', image: 'tshirt7.jpg', cost: '$18' },
      { name: 'T-Shirt 8', image: 'tshirt8.jpg', cost: '$18' },
      { name: 'T-Shirt 9', image: 'tshirt9.jpg', cost: '$18' },
      { name: 'T-Shirt 10', image: 'tshirt10.jpg', cost: '$18' },
  
      // Add more t-shirt data as needed
    ],
    'pants': [
      { name: 'Pants 1', image: 'pants1.jpg', cost: '$30' },
      { name: 'Pants 4', image: 'pants4.jpg', cost: '$35' },
      { name: 'Pants 5', image: 'pants5.jpg', cost: '$35' },
      { name: 'Pants 6', image: 'pants6.jpg', cost: '$35' },
      { name: 'Pants 7', image: 'pants7.jpg', cost: '$35' },
      { name: 'Pants 8', image: 'pants8.jpg', cost: '$35' },
      // Add more pants data as needed
    ],
    'jeans': [
      { name: 'menjeans 1', image: 'menjeans1.jpg', cost: '$40' },
      { name: 'menjeans 3', image: 'menjeans3.jpg', cost: '$45' },
      { name: 'menjeans 4', image: 'menjeans4.jpg', cost: '$45' },
      { name: 'menjeans 8', image: 'menjeans8.jpg', cost: '$45' },
      { name: 'menjeans 6', image: 'menjeans6.jpg', cost: '$45' },
      // Add more jeans data as needed
    ],
    'coats': [
      { name: 'Coat 1', image: 'coat1.jpg', cost: '$50' },
      { name: 'Coat 2', image: 'coat2.jpg', cost: '$60' },
      { name: 'Coat 4', image: 'coat4.jpg', cost: '$60' },
      { name: 'Coat 5', image: 'coat5.jpg', cost: '$60' },
      { name: 'Coat 6', image: 'coat6.jpg', cost: '$60' },
      { name: 'Coat 7', image: 'coat7.jpg', cost: '$60' },
      // Add more coat data as needed
    ]
  };
  

  // Function to handle clicks on images
  function handleImageClick(event) {
    var imageUrl = event.target.getAttribute('src');
    var productName = event.target.getAttribute('alt');
    var productCost = event.target.getAttribute('data-cost');

    // Redirect to menl.html with query parameters
    window.location.href = `menl.html?src=${imageUrl}&name=${productName}&cost=${productCost}`;
  }

  // Function to create product elements
  function createProductElements(products) {
    var productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(function(product) {
      var productDiv = document.createElement('div');
      productDiv.classList.add('product');

      var img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      img.setAttribute('data-cost', product.cost); // Set data-cost attribute

      var namePara = document.createElement('p');
      namePara.textContent = product.name;

      var costPara = document.createElement('p');
      costPara.textContent = 'Cost: ' + product.cost;

      productDiv.appendChild(img);
      productDiv.appendChild(namePara);
      productDiv.appendChild(costPara);

      productsContainer.appendChild(productDiv);

      // Add click event listener to the image
      img.addEventListener('click', handleImageClick);
    });
  }

  // Define a function to handle clicks on sidebar links
  function handleCategoryClick(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the category from the href attribute of the clicked link
    var category = event.target.getAttribute('href').substring(1); // Remove the '#' character
    
    // Get the product data for the selected category
    var products = productsData[category];

    // Create product elements
    createProductElements(products);
  }

  // Attach click event listeners to sidebar links
  var sidebarLinks = document.querySelectorAll('.category-link');
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', handleCategoryClick);
  });
});
