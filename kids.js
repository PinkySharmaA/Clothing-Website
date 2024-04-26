// Define product data for each category
var productsData = {
    'frocks': [
      { name: 'Frock 1', image: 'frocks1.jpg', cost: '$20' },
      { name: 'Frock 2', image: 'frock2.jpg', cost: '$25' },
      { name: 'Frock 3', image: 'frock3.jpg', cost: '$25' },
      { name: 'Frock 4', image: 'frock4.jpg', cost: '$25' },
      { name: 'Frock 5', image: 'frock5.jpg', cost: '$25' },
      { name: 'Frock 6', image: 'frock6.jpg', cost: '$25' },
      { name: 'Frock 7', image: 'frock7.jpg', cost: '$25' },
      { name: 'Frock 8', image: 'frock8.jpg', cost: '$25' },
      { name: 'Frock 9', image: 'frock9.jpg', cost: '$25' },
      { name: 'Frock 10', image: 'frock10.jpg', cost: '$25' },
      { name: 'Frock 11', image: 'frock11.jpg', cost: '$25' },
      { name: 'Frock 12', image: 'frock12.jpg', cost: '$25' },
      // Add more frock data as needed
    ],
    'jeans': [
      { name: 'Kids Jeans 1', image: 'kidsj1.jpg', cost: '$30' },
      { name: 'Kids Jeans 2', image: 'kidsj2.jpg', cost: '$35' },
      { name: 'Kids Jeans 3', image: 'kidsj16.jpg', cost: '$35' },
      { name: 'Kids Jeans 4', image: 'kidsj4.jpg', cost: '$35' },
      { name: 'Kids Jeans 5', image: 'kidsj5.jpg', cost: '$35' },
      { name: 'Kids Jeans 6', image: 'kidsj7.jpg', cost: '$35' },
      { name: 'Kids Jeans 7', image: 'kidsj8.jpg', cost: '$35' },
      { name: 'Kids Jeans 8', image: 'kidsj10.jpg', cost: '$35' },
      { name: 'Kids Jeans 9', image: 'kidsj11.jpg', cost: '$35' },
      { name: 'Kids Jeans 10', image: 'kidsj14.jpg', cost: '$35' },
      { name: 'Kids Jeans 11', image: 'kidsj15.jpg', cost: '$35' },
            // Add more jeans data as needed
    ],
    'tshirts': [
      { name: 'T-Shirt 1', image: 'kidst1.jpg', cost: '$15' },
      { name: 'T-Shirt 2', image: 'kidst2.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst3.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst4.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst5.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst8.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst9.jpg', cost: '$18' },
      { name: 'T-Shirt 3', image: 'kidst10.jpg', cost: '$18' },

      // Add more t-shirt data as needed
    ]
    // Add more categories and data as needed
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
