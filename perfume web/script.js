// Product Data
const products = [
    {
        id: 1,
        name: "Midnight Rose",
        brand: "LuxePerfume",
        price: 89.99,
        image: "data:image/jpeg;base64,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",
        category: "floral",
        description: "A captivating blend of rose, jasmine, and musk",
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Sandalwood",
        brand: "LuxePerfume",
        price: 95.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DVdigdBME9OXqdRZZgwHuqvoRFWMT5Jk-A&s",
        category: "woody",
        description: "Rich sandalwood with hints of amber and vanilla",
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "Ocean Breeze",
        brand: "LuxePerfume",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDnK-vhLJoxGOvh5xR5BEBTMSyixwWaxmKA&s",
        category: "fresh",
        description: "Fresh citrus notes with marine accords",
        inStock: true,
        featured: true
    },
{
    id:4,
    name:"Mokhalit",
    brand:"LuxePerfume",
    price:80.9,
    image:"https://images-cdn.u-buy.co.nz/64f74549a5cc2663b318a424-mokhalat-elazm-by-oud-elite-100ml-spray.jpg",
    category:"fresh",
     description: "Fresh citrus notes with marine accords",
     inStock:true,
     featured:true

},
];


// Cart Management
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveToLocalStorage();
        this.updateCartBadge();
        this.showNotification('Product added to cart!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateCartBadge();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveToLocalStorage();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            badge.textContent = this.getItemCount();
            badge.style.display = this.getItemCount() > 0 ? 'flex' : 'none';
        }
    }

    showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'tooltip-notification';
  notification.textContent = 'Add TO New Cart';

  // Append to body
  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    // Fade out
    notification.style.opacity = '0';
    // Remove after transition
    setTimeout(() => notification.remove(), 300);
  }, 3000);
    }
}

// Initialize cart
const cart = new Cart();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadFeaturedProducts();
    setupEventListeners();
    cart.updateCartBadge();
    
    // Add cart badge to shopping bag icon
    const cartIcon = document.querySelector('a[href="cart.html"]');
    if (cartIcon) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.style.display = 'none';
        cartIcon.style.position = 'relative';
        cartIcon.appendChild(badge);
        cart.updateCartBadge();
    }
}

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.filter(product => product.featured);
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="col-lg-3 col-md-6" data-aos="fade-up">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${!product.inStock ? '<span class="product-badge">Out of Stock</span>' : ''}
                </div>
                <div class="product-content">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">$${product.price}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                            ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="btn btn-outline-primary btn-sm" onclick="viewProduct(${product.id})">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Mobile menu enhancements
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.body.classList.toggle('menu-open');
        });
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
}


function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
// Simulate API call
    setTimeout(() => {
        alert('Thank you for subscribing!');
        event.target.reset();
    }, 1000);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for use in other files
window.cart = cart;
window.products = products;


// Show modal on cart icon click
document.getElementById('openCartModal').addEventListener('click', function (e) {
    e.preventDefault();
    renderCartModal();
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
});

function renderCartModal() {
    const cart = new Cart();
    const container = document.getElementById('cart-modal-body');
    container.innerHTML = '';

    if (cart.items.length === 0) {
        container.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        document.getElementById('modal-cart-total').innerText = '';
        return;
    }

    cart.items.forEach(item => {
        const itemHTML = `
            <div class="d-flex align-items-center border-bottom pb-3 mb-3">
                <img src="${item.image}" alt="${item.name}" class="me-3" style="width: 80px; height: auto; border-radius: 8px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1 ps-2">${item.name}</h6>
                    <p class="mb-0  ps-2">Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
                    <p class="mb-0  ps-2">Subtotal: $${(item.quantity * item.price).toFixed(2)}</p>
                </div>
                <button class="btn btn-sm btn-danger ms-3" onclick="removeFromModalCart(${item.id})">Remove</button>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    document.getElementById('modal-cart-total').innerText = `Total: $${cart.getTotal().toFixed(2)}`;
}

function removeFromModalCart(productId) {
    const cart = new Cart();
    cart.removeItem(productId);
    renderCartModal();
}


// ----view button----//

// Load products
const productContainer = document.getElementById("featured-products");

products.forEach(product => {
  if (product.featured) {
    productContainer.innerHTML += `
      <div class="col-md-3">
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-outline-primary btn-sm mt-auto" onclick="viewProduct(${product.id})">View</button>
          </div>
        </div>
      </div>
    `;
  }
});

// View product in modal
function viewProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById("productTitle").innerText = product.name;
    document.getElementById("productImage").src = product.image;
    document.getElementById("productBrand").innerText = product.brand;
    document.getElementById("productPrice").innerText = product.price;
    document.getElementById("productDescription").innerText = product.description;
    document.getElementById("productCategory").innerText = product.category;
    document.getElementById("productStock").innerText = product.inStock ? "In Stock" : "Out of Stock";

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }
}