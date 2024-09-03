// Cart Array to Store Added Items
let cart = [];

// Get Cart Elements
const cartIcon = document.getElementById('cart-icon');
const cartSection = document.getElementById('cart-section');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart-btn'); // Clear Cart Button

// Toggle Cart Visibility (opens cart when clicking the cart icon)
cartIcon.addEventListener('click', function() {
    cartSection.style.display = cartSection.style.display === 'none' || cartSection.style.display === '' ? 'block' : 'none';
});

// Function to Update the Cart Display and Total
function updateCart() {
    // Clear current cart items display
    cartItemsContainer.innerHTML = '';

    // Update cart item count
    cartCountElement.textContent = cart.length;

    let total = 0;

    // Display each item in the cart
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItemElement);

        // Add price to total
        total += item.price;
    });

    // Update total price
    cartTotalElement.textContent = total.toFixed(2);
}

// Function to Show Prompt
/*function showPrompt(message, promptElementId) {
    const promptElement = document.getElementById(promptElementId);
    promptElement.innerText = message;
    promptElement.style.display = 'block';  // Show the prompt

    // Hide the prompt after 2 seconds
    setTimeout(() => {
        promptElement.style.display = 'none';
    }, 2000);
}*/

function showPrompt(message) {
    const promptElement = document.getElementById('prompt');
    promptElement.innerText = message;
    promptElement.style.display = 'block';  // Show the prompt

    // Hide the prompt after 2 seconds
    setTimeout(() => {
        promptElement.style.display = 'none';
    }, 2000);
}

// Add Event Listeners to Add to Cart Buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));
            const promptId = `prompt-${itemName.toLowerCase().replace(/\s+/g, '-')}`; // Create a dynamic ID for the prompt

            // Add the item to the cart array
            cart.push({ name: itemName, price: itemPrice });

            // Update Cart
            updateCart();

            // Show confirmation prompt
            showPrompt(`${itemName} added to cart`, promptId);
        });
    });
});

// Clear Cart Functionality
clearCartBtn.addEventListener('click', function() {
    cart = []; // Clear the cart array
    updateCart(); // Update the cart display and total
});
