// Define product data for each category
var productsData = {
  'tops': [
    { name: 'Top 1', image: 'top1.jpg', cost: '$20' },
    { name: 'Top 2', image: 'top2.jpg', cost: '$25' },
    { name: 'Top 3', image: 'top3.jpg', cost: '$25' },
    { name: 'Top 4', image: 'top4.jpg', cost: '$25' },
    { name: 'Top 5', image: 'top5.jpg', cost: '$25' },
    { name: 'Top 6', image: 'top6.jpg', cost: '$25' },
    { name: 'Top 7', image: 'top7.jpg', cost: '$25' },
    { name: 'Top 8', image: 'top8.jpg', cost: '$25' },
    { name: 'Top 9', image: 'top9.jpg', cost: '$25' },
    { name: 'Top 10', image: 'top10.jpg', cost: '$25' },
    { name: 'Top 11', image: 'top11.jpg', cost: '$25' },
    { name: 'Top 12', image: 'top12.jpg', cost: '$25' },
    { name: 'Top 13', image: 'top13.jpg', cost: '$25' },
    { name: 'Top 14', image: 'top14.jpg', cost: '$25' },
    { name: 'Top 15', image: 'top15.jpg', cost: '$25' },
    { name: 'Top 16', image: 'top16.jpg', cost: '$25' },

    // Add more top data as needed
  ],
  'kurtis': [
    { name: 'Kurti 1', image: 'kurti1.jpg', cost: '$30' },
    { name: 'Kurti 2', image: 'kurti2.jpg', cost: '$35' },
    { name: 'Kurti 7', image: 'kurti7.jpg', cost: '$35' },
    { name: 'Kurti 8', image: 'kurti8.jpg', cost: '$35' },
    { name: 'Kurti 9', image: 'kurti9.jpg', cost: '$35' },
    { name: 'Kurti 10', image: 'kurti10.jpg', cost: '$35' },
    { name: 'Kurti 11', image: 'kurti11.jpg', cost: '$35' },
    { name: 'Kurti 12', image: 'kurti12.jpg', cost: '$35' },
    { name: 'Kurti 14', image: 'kurti14.jpg', cost: '$35' },
    { name: 'Kurti 15', image: 'kurti15.jpg', cost: '$35' },
    { name: 'Kurti 17', image: 'kurti17.jpg', cost: '$35' },

    // Add more kurti data as needed
  ],
  'jeans': [
    { name: 'Jeans 1', image: 'jeans1.jpg', cost: '$40' },
    { name: 'Jeans 2', image: 'jeans2.jpg', cost: '$45' },
    { name: 'Jeans 3', image: 'jeans3.jpg', cost: '$45' },
    { name: 'Jeans 4', image: 'jeans4.jpg', cost: '$45' },
    { name: 'Jeans 5', image: 'jeans5.jpg', cost: '$45' },
    { name: 'Jeans 6', image: 'jeans6.jpg', cost: '$45' },
    { name: 'Jeans 7', image: 'jeans7.jpg', cost: '$45' },
    { name: 'Jeans 8', image: 'jeans8.jpg', cost: '$45' },
    { name: 'Jeans 10', image: 'jeans10.jpg', cost: '$45' },
    { name: 'Jeans 11', image: 'jeans11.jpg', cost: '$45' },
    { name: 'Jeans 12', image: 'jeans12.jpg', cost: '$45' },
    { name: 'Jeans 13', image: 'jeans13.jpg', cost: '$45' },
    { name: 'Jeans 15', image: 'jeans15.jpg', cost: '$45' },
    { name: 'Jeans 16', image: 'jeans16.jpg', cost: '$45' },
    { name: 'Jeans 20', image: 'jeans20.jpg', cost: '$45' },
    { name: 'Jeans 22', image: 'jeans22.jpg', cost: '$45' },
    { name: 'Jeans 23', image: 'jeans23.jpg', cost: '$45' },

    // Add more jeans data as needed
  ],
  'sarees': [
    { name: 'Saree 1', image: 'saree1.jpg', cost: '$50' },
    { name: 'Saree 2', image: 'saree2.jpg', cost: '$60' },
    { name: 'Saree 3', image: 'saree3.jpg', cost: '$60' },
    { name: 'Saree 4', image: 'saree4.jpg', cost: '$60' },
    { name: 'Saree 5', image: 'saree5.jpg', cost: '$60' },
    { name: 'Saree 6', image: 'saree6.jpg', cost: '$60' },
    { name: 'Saree 7', image: 'saree7.jpg', cost: '$60' },
    { name: 'Saree 9', image: 'saree9.jpg', cost: '$60' },
    { name: 'Saree 10', image: 'saree10.jpg', cost: '$60' },
    { name: 'Saree 11', image: 'saree11.jpg', cost: '$60' },
    { name: 'Saree 12', image: 'saree12.jpg', cost: '$60' },

    // Add more saree data as needed
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

