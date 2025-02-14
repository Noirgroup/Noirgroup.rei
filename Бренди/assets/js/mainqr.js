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
//REFINE//




//Категорії//
function toggleCategory(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.classList.add("rotate");
        icon.classList.remove("bx-plus");
        icon.classList.add("bx-x");
    } else {
        content.style.display = "none";
        icon.classList.remove("rotate");
        icon.classList.remove("bx-x");
        icon.classList.add("bx-plus");
    }
}

//меню//

document.addEventListener('DOMContentLoaded', function() {
    var currentOpenPopup = null;

    // Категорія
    var categoryLink = document.getElementById('categoryLink');
    var categoryIcon = document.getElementById('categoryIcon');
    var blurOverlay2 = document.getElementById('blur-overlay2');
    var categoryPopup = document.getElementById('categoryPopup');
    var categoryPopupClose = document.getElementById('categoryPopupClose');

    // Тип товару
    var typeLink = document.getElementById('typeLink');
    var typeIcon = document.getElementById('typeIcon');
    var blurOverlay3 = document.getElementById('blur-overlay3');
    var typePopup = document.getElementById('typePopup');
    var typePopupClose = document.getElementById('typePopupClose');

    // Колекція
    var collectionLink = document.getElementById('collectionLink');
    var collectionIcon = document.getElementById('collectionIcon');
    var blurOverlay4 = document.getElementById('blur-overlay4');
    var collectionPopup = document.getElementById('collectionPopup');
    var collectionPopupClose = document.getElementById('collectionPopupClose');

    var bottomLine = document.querySelector('.bottom-line');

    function togglePopup(link, icon, popup, blurOverlay, closePopup) {
        function handleToggle(event) {
            event.preventDefault();
            if (popup.style.display === 'block') {
                closePopupFunction(popup, blurOverlay, icon);
            } else {
                if (currentOpenPopup) {
                    closePopupFunction(currentOpenPopup.popup, currentOpenPopup.blurOverlay, currentOpenPopup.icon);
                }
                openPopup(popup, blurOverlay, icon);
                currentOpenPopup = { popup, blurOverlay, icon };
            }
        }

        link.addEventListener('click', handleToggle);
        icon.addEventListener('click', handleToggle);
        closePopup.addEventListener('click', function() {
            closePopupFunction(popup, blurOverlay, icon);
            currentOpenPopup = null;
        });
        blurOverlay.addEventListener('click', function() {
            closePopupFunction(popup, blurOverlay, icon);
            currentOpenPopup = null;
        });
    }

    function openPopup(popup, blurOverlay, icon) {
        var rect = bottomLine.getBoundingClientRect();
        popup.style.top = rect.bottom + 'px';
        popup.style.left = rect.left + 'px';
        popup.style.width = rect.width + 'px';
        popup.style.left = 0; // Завжди вирівнюємо по лівому краю
        popup.style.width = '100%'; // Завжди встановлюємо 100% ширини

        popup.style.display = 'block';
        blurOverlay.style.display = 'block';
        icon.classList.add('bx-rotate-180'); // Додано перевертання іконки
    }

    function closePopupFunction(popup, blurOverlay, icon) {
        popup.style.display = 'none';
        blurOverlay.style.display = 'none';
        icon.classList.remove('bx-rotate-180'); // Додано повернення іконки
    }

    window.addEventListener('resize', function() {
        if (categoryPopup.style.display === 'block') {
            var rect = bottomLine.getBoundingClientRect();
            categoryPopup.style.top = rect.bottom + 'px';
            categoryPopup.style.left = rect.left + 'px';
            categoryPopup.style.width = rect.width + 'px';
            categoryPopup.style.left = 0; // Завжди вирівнюємо по лівому краю
            categoryPopup.style.width = '100%'; // Завжди встановлюємо 100% ширини
        }

        if (typePopup.style.display === 'block') {
            var rect = bottomLine.getBoundingClientRect();
            typePopup.style.top = rect.bottom + 'px';
            typePopup.style.left = rect.left + 'px';
            typePopup.style.width = rect.width + 'px';
            typePopup.style.left = 0; // Завжди вирівнюємо по лівому краю
            typePopup.style.width = '100%'; // Завжди встановлюємо 100% ширини
        }

        if (collectionPopup.style.display === 'block') {
            var rect = bottomLine.getBoundingClientRect();
            collectionPopup.style.top = rect.bottom + 'px';
            collectionPopup.style.left = rect.left + 'px';
            collectionPopup.style.width = rect.width + 'px';
            collectionPopup.style.left = 0; // Завжди вирівнюємо по лівому краю
            collectionPopup.style.width = '100%'; // Завжди встановлюємо 100% ширини
        }
    });

    togglePopup(categoryLink, categoryIcon, categoryPopup, blurOverlay2, categoryPopupClose);
    togglePopup(typeLink, typeIcon, typePopup, blurOverlay3, typePopupClose);
    togglePopup(collectionLink, collectionIcon, collectionPopup, blurOverlay4, collectionPopupClose);

});
const cardContainer = document.querySelector('.card-container');



cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
    <h2>${card.title}</h2>
    <img src="${card.image}" alt="${card.title}">
    <p>${card.text}</p>
  `;
    cardContainer.appendChild(cardElement);
});
//
document.addEventListener("DOMContentLoaded", function() {
    const blogContent = document.querySelector(".blog-content");
    blogContent.style.opacity = "0";
    blogContent.style.transform = "translateY(20px)";
    setTimeout(() => {
        blogContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        blogContent.style.opacity = "1";
        blogContent.style.transform = "translateY(0)";
    }, 500);
});