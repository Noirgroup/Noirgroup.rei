/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
}

document.getElementById('login-icon').addEventListener('click', function() {
    alert('Redirecting to login page...');
    // Implement actual redirect here
});

document.getElementById('wishlist-icon').addEventListener('click', function() {
    alert('Redirecting to wishlist...');
    // Implement actual redirect here
});

document.getElementById('cart-icon').addEventListener('click', function() {
    alert('Redirecting to cart...');
    // Implement actual redirect here
});

// Додаємо обробники подій для кожної іконки
document.getElementById('login-icon').addEventListener('click', function() {
    alert('Перехід до сторінки входу...');
    // Реалізуйте фактичний перехід тут
});

document.getElementById('wishlist-icon').addEventListener('click', function() {
    alert('Перехід до списку бажань...');
    // Реалізуйте фактичний перехід тут
});

document.getElementById('cart-icon').addEventListener('click', function() {
    alert('Перехід до кошика...');
    // Реалізуйте фактичний перехід тут
});