//side bar script
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarWidth = sidebar.offsetWidth;
    if (sidebar.style.right === '0px') {
        sidebar.style.right = `-${sidebarWidth}px`; // Hide the sidebar
    } else {
        sidebar.style.right = '0px'; // Show the sidebar
    }
}
window.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarWidth = sidebar.offsetWidth;
    if (event.target.closest('.cart') === null && event.target.closest('.sidebar') === null) {
        sidebar.style.right = `-${sidebarWidth}px`; // Hide the sidebar
    }
});
//cart script
var cart = [];

// Function to add an item to the cart
function addToCart(itemElement) {
    // Extract item details from the item element
    var title = itemElement.querySelector('.card-title').textContent;
    var price = itemElement.querySelector('.price').textContent;

    // Push the item object into the cart array
    cart.push({ title: title, price: price });

    // Update the cart display
    displayCart();
}


// Function to display cart items in the HTML
function displayCart() {
    // Get the cart section element from the HTML
    var cartSection = document.getElementById('cartItem');

    // Clear the existing content of the cart section
    cartSection.innerHTML = '';

    // Check if the cart is empty
    if (cart.length === 0) {
        cartSection.textContent = 'Your cart is empty';
    } else {

        for (var i = 0; i < cart.length; i++) {

            var itemParagraph = document.createElement('p');

            itemParagraph.textContent = "Item: " + cart[i].title + ", Price: " + cart[i].price;

            cartSection.appendChild(itemParagraph);
        }
    }
	
}
// Function to calculate the total price
function calculateTotal() {
    // Initialize total variable
    var total = 0;

    // Get all elements with the class 'price'
    var prices = document.querySelectorAll('.price');

    // Loop through each price element
    prices.forEach(function(priceElement) {
        // Extract the text content of the price element
        var priceText = priceElement.textContent.trim(); // Remove leading/trailing whitespace

        // Split the text content based on the space character (' ')
        var priceParts = priceText.split(' ');

        // Ensure we have at least two parts (numerical value and currency symbol)
        if (priceParts.length >= 2) {
            // Extract the numerical value from the first part
            var priceValue = parseFloat(priceParts[0]); 

            // Log the extracted price value
            console.log('Price:', priceValue);

            // Add the value to the total
            total += priceValue;
        }
    });

    // Log the total
    console.log('Total:', total);

    // Display the total in the total section
    var totalSection = document.getElementById('total');
    totalSection.textContent = 'SYP ' + total.toFixed(2); // Display total with 2 decimal places
}

// Call the calculateTotal function after the page has loaded
window.onload = function() {
    calculateTotal();
};






function openLinkInNewTab1() {
    // URL to open in the new tab
    var url = 'CheckOut.html'; // Replace 'https://example.com' with the desired URL

    // Open the URL in a new tab
    window.open(url, '_blank');
}