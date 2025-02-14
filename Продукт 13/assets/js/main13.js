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

window.addEventListener('resize', function() {
    const menuItems = document.querySelector('.menu-items');
    const refine = document.querySelector('.refine');
    const sort = document.querySelector('.sort');
    const menuItem = document.querySelector('.menu-item');

    if (window.innerWidth <= 480) {
        menuItems.style.display = 'none';
        refine.style.display = 'flex';
        sort.style.marginLeft = '0';
        menuItem.style.display = 'none';
    } else if (window.innerWidth <= 768) {
        menuItems.style.display = 'none';
        refine.style.display = 'block';
        sort.style.marginLeft = 'auto';
        menuItem.style.display = 'block';
    } else {
        menuItems.style.display = 'flex';
        refine.style.display = 'none';
        sort.style.marginLeft = 'auto';
        menuItem.style.display = 'block';
    }
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelector('.menu-items');
    const refine = document.querySelector('.refine');
    const sort = document.querySelector('.sort');
    const menuItem = document.querySelector('.menu-item');

    if (window.innerWidth <= 480) {
        menuItems.style.display = 'none';
        refine.style.display = 'flex';
        sort.style.marginLeft = '0';
        menuItem.style.display = 'none';
    } else if (window.innerWidth <= 768) {
        menuItems.style.display = 'none';
        refine.style.display = 'block';
        sort.style.marginLeft = 'auto';
        menuItem.style.display = 'block';
    } else {
        menuItems.style.display = 'flex';
        refine.style.display = 'none';
        sort.style.marginLeft = 'auto';
        menuItem.style.display = 'block';
    }
});

//  Cart

document.addEventListener('DOMContentLoaded', function() {
    var sortLink = document.getElementById('sortLink');
    var sortIcon = document.getElementById('sortIcon');
    var blurOverlay1 = document.getElementById('blur-overlay1');
    var myPopup = document.getElementById('myPopup');
    var popupClose = document.getElementById('popupClose');
    var bottomLine = document.querySelector('.bottom-line');

    function togglePopup(event) {
        event.preventDefault(); // Запобігаємо переходу по посиланню
        if (myPopup.style.display === 'block') {
            closePopup();
        } else {
            openPopup();
        }
    }

    sortLink.addEventListener('click', togglePopup);
    sortIcon.addEventListener('click', togglePopup); // Додано подію кліку для іконки

    popupClose.addEventListener('click', function() {
        closePopup();
    });

    blurOverlay1.addEventListener('click', function() {
        closePopup();
    });

    function openPopup() {
        var rect = bottomLine.getBoundingClientRect();
        myPopup.style.top = rect.bottom + 'px';
        myPopup.style.left = rect.left + 'px';
        myPopup.style.width = rect.width + 'px';
        myPopup.style.left = 0; // Завжди вирівнюємо по лівому краю
        myPopup.style.width = '100%'; // Завжди встановлюємо 100% ширини

        myPopup.style.display = 'block';
        blurOverlay1.style.display = 'block';
        sortIcon.classList.add('bx-rotate-180'); // Додано перевертання іконки
    }


    function closePopup() {
        myPopup.style.display = 'none';
        blurOverlay1.style.display = 'none';
        sortIcon.classList.remove('bx-rotate-180'); // Додано повернення іконки
    }

    window.addEventListener('resize', function() {
        if (myPopup.style.display === 'block') {
            var rect = bottomLine.getBoundingClientRect();
            myPopup.style.top = rect.bottom + 'px';
            myPopup.style.left = rect.left + 'px';
            myPopup.style.width = rect.width + 'px';
            myPopup.style.left = 0; // Завжди вирівнюємо по лівому краю
            myPopup.style.width = '100%'; // Завжди встановлюємо 100% ширини

        }
    });
});


function toggleHeart(button) {
    const heartIcon = button.querySelector('i');

    // Перевірка, чи це порожнє серце
    if (heartIcon.classList.contains('bx-heart')) {
        // Зміна на заповнене серце та обертання
        heartIcon.classList.remove('bx-heart');
        heartIcon.classList.add('bxs-heart', 'rotate');
    } else {
        // Повернення до порожнього серця
        heartIcon.classList.remove('bxs-heart', 'rotate');
        heartIcon.classList.add('bx-heart');
    }
}


const heartButton = document.getElementById('heartButton');
const heartIcon = document.getElementById('heartIcon');

heartButton.addEventListener('click', function() {
    if (heartIcon.classList.contains('bx-heart')) {
        heartIcon.classList.remove('bx-heart');
        heartIcon.classList.add('bxs-heart'); // Змінюємо на заповнене серце
    } else {
        heartIcon.classList.remove('bxs-heart');
        heartIcon.classList.add('bx-heart'); // Повертаємо порожнє серце
    }
});


function highlightThumbnail(element) {
    // Зняти виділення з усіх мініатюр
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove('selected');
    });

    // Додати клас виділення до натиснутої мініатюри
    element.classList.add('selected');
}



// Масив для зберігання шляхів до зображень
const images = [
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 3.jpeg',
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 4.jpeg',
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 1.jpeg',
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 2.jpeg',
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 5.jpeg',
    'STYLEZERO/Фото Продукта/JORDAN 5 RETRO DUNK ON MARS 6.jpeg'
];

let currentIndex = 0;

function openGallery(index) {
    currentIndex = index;
    document.getElementById('customModalImage').src = images[currentIndex];
    document.getElementById('customModalGallery').style.display = 'flex';
}

function closeGallery() {
    document.getElementById('customModalGallery').style.display = 'none';
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.getElementById('customModalImage').src = images[currentIndex];
}

//

function toggleSizeDropdown() {
    var dropdown = document.getElementById('sizeDropdown');
    var icon = document.querySelector('.size-toggle i');

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        icon.classList.remove('bxs-down-arrow');
        icon.classList.add('bxs-up-arrow');
    } else {
        dropdown.style.display = "none";
        icon.classList.remove('bxs-up-arrow');
        icon.classList.add('bxs-down-arrow');
    }
}

function toggleSizeDropdown() {
    const sizeSelection = document.querySelector('.size-selection');
    sizeSelection.classList.toggle('show-options');
}

function toggleHeart(element) {
    const icon = element.querySelector('i');
    if (icon.classList.contains('bx-heart')) {
        icon.classList.replace('bx-heart', 'bxs-heart');
    } else {
        icon.classList.replace('bxs-heart', 'bx-heart');
    }
}

function toggleSizeDropdown() {
    var dropdown = document.getElementById("sizeDropdown");
    var isOpen = dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px";

    if (isOpen) {
        dropdown.style.maxHeight = "0px"; // Закрити вікно
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Відкрити вікно
    }
}

function selectSize(size) {
    var sizeToggle = document.getElementById("sizeToggle");
    sizeToggle.innerHTML = size + " <i class='bx bxs-down-arrow'></i>"; // Заміна тексту на вибраний розмір
    toggleSizeDropdown(); // Закрити вікно після вибору розміру
}

function toggleSizeDropdown() {
    var dropdown = document.getElementById("sizeDropdown");
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
}

function selectSize(size) {
    var sizeToggle = document.getElementById("sizeToggle");
    sizeToggle.innerHTML = size + " <i class='bx bxs-down-arrow'></i>";
    toggleSizeDropdown(); // Закрити вікно після вибору розміру
}

// Додаємо клас 'selected' до відповідного елемента, залежно від сторінки
window.onload = function() {
    let currentUrl = window.location.pathname;

    if (currentUrl.includes("index1.html")) {
        document.getElementById("circle1").classList.add("selected");
    } else if (currentUrl.includes("index2.html")) {
        document.getElementById("circle2").classList.add("selected");
    } else if (currentUrl.includes("index3.html")) {
        document.getElementById("circle3").classList.add("selected");
    }
};