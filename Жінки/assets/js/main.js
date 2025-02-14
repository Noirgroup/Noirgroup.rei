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



document.addEventListener("DOMContentLoaded", function() {
    const categoryPopup = document.getElementById("categoryPopupq1");
    const typePopup = document.getElementById("typePopup1");
    const collectionPopup = document.getElementById("collectionPopup1");

    const blurOverlay2 = document.getElementById("blur-overlay2");
    const blurOverlay3 = document.getElementById("blur-overlay3");
    const blurOverlay4 = document.getElementById("blur-overlay4");


    function closePopupIfSmallScreen() {
        if (window.innerWidth <= 768) {
            // Закриваємо всі відкриті модальні вікна і накладення
            if (categoryPopup.style.display === "block") {
                categoryPopup.style.display = "none";
                blurOverlay2.style.display = "none";
            }
            if (typePopup.style.display === "block") {
                typePopup.style.display = "none";
                blurOverlay3.style.display = "none";
            }
            if (collectionPopup.style.display === "block") {
                collectionPopup.style.display = "none";
                blurOverlay4.style.display = "none";
            }
        }
    }

    // Викликаємо функцію при завантаженні сторінки та зміні розміру вікна
    window.addEventListener('resize', closePopupIfSmallScreen);
    closePopupIfSmallScreen();
});

document.addEventListener('DOMContentLoaded', function() {
    var refineLink = document.getElementById('refineLink');
    var refineIcon = document.getElementById('refineIcon');
    var blurOverlay = document.getElementById('custom-blur-overlay');
    var refinePopup = document.getElementById('refinePopup1');
    var bottomLine = document.querySelector('.bottom-line');

    function togglePopup(event) {
        event.preventDefault();
        if (window.innerWidth <= 768) {
            if (refinePopup.style.display === 'block') {
                closePopup();
            } else {
                openPopup();
            }
        }
    }

    function openPopup() {
        if (window.innerWidth <= 768) {
            var rect = bottomLine ? bottomLine.getBoundingClientRect() : { bottom: 0 };
            refinePopup.style.top = rect.bottom + 'px';
            refinePopup.style.left = 0;
            refinePopup.style.width = '100%';
            refinePopup.style.display = 'block';
            blurOverlay.style.display = 'block';
            refineIcon.classList.add('bx-rotate-180');
            document.body.classList.add('no-scroll'); // Блокувати прокрутку
        }
    }

    function closePopup() {
        refinePopup.style.display = 'none';
        blurOverlay.style.display = 'none';
        refineIcon.classList.remove('bx-rotate-180');
        document.body.classList.remove('no-scroll'); // Відновити прокрутку
    }

    refineLink.addEventListener('click', togglePopup);
    blurOverlay.addEventListener('click', closePopup);

    // Автоматично закривати попап і відновлювати прокрутку, коли ширина стає більшою за 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closePopup();
        } else if (window.innerWidth <= 768 && refinePopup.style.display === 'block') {
            var rect = bottomLine ? bottomLine.getBoundingClientRect() : { bottom: 0 };
            refinePopup.style.top = rect.bottom + 'px';
            refinePopup.style.left = 0;
            refinePopup.style.width = '100%';
        }
    });
});
//

document.addEventListener('DOMContentLoaded', function() {
    var refineLink = document.getElementById('refineLink');
    var refineIcon = document.getElementById('refineIcon');
    var refinePopup = document.getElementById('refinePopup1');
    var blurOverlay = document.getElementById('custom-blur-overlay');

    var sortLink = document.getElementById('sortLink');
    var sortIcon = document.getElementById('sortIcon');
    var sortPopup = document.getElementById('myPopup4');
    var sortBlurOverlay = document.getElementById('blur-overlay1');

    var bottomLine = document.querySelector('.bottom-line');

    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }

    function openPopup(popup, icon, blur, adjustPosition) {
        window.scrollTo(0, 0); // Прокрутка до верху

        // Прив'язка вікна до bottom-line для всіх popup-ів
        if (adjustPosition && bottomLine) {
            var rect = bottomLine.getBoundingClientRect();
            popup.style.top = (rect.bottom - 0) + 'px'; // Підняття на 10px вище від bottom-line
            popup.style.left = '0';
            popup.style.width = '100%';
        } else {
            popup.style.top = '';
            popup.style.left = '';
            popup.style.width = '';
        }

        popup.classList.add('active');
        blur.classList.add('active');
        icon.classList.add('bx-rotate-180');
        disableScroll();
    }

    function closePopup(popup, icon, blur) {
        popup.classList.remove('active');
        blur.classList.remove('active');
        icon.classList.remove('bx-rotate-180');
        enableScroll();
    }

    // "Уточнити" модальне вікно
    refineLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (refinePopup.classList.contains('active')) {
            closePopup(refinePopup, refineIcon, blurOverlay);
        } else {
            openPopup(refinePopup, refineIcon, blurOverlay, true);
        }
    });

    blurOverlay.addEventListener('click', function() {
        closePopup(refinePopup, refineIcon, blurOverlay);
    });

    // "Сортувати" модальне вікно
    sortLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (sortPopup.classList.contains('active')) {
            closePopup(sortPopup, sortIcon, sortBlurOverlay);
        } else {
            openPopup(sortPopup, sortIcon, sortBlurOverlay, true);
        }
    });

    sortBlurOverlay.addEventListener('click', function() {
        closePopup(sortPopup, sortIcon, sortBlurOverlay);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let isPopupOpen = false;

    function openPopup(popupElement, blurOverlay, iconElement) {
        if (isPopupOpen) return; // Якщо вікно вже відкрите, не відкривати його повторно

        window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка до верху сторінки
        setTimeout(function() {
            popupElement.style.display = 'block';
            blurOverlay.style.display = 'block';
            iconElement.classList.add('bx-rotate-180');
            document.body.style.overflow = 'hidden'; // Заблокувати прокручування сторінки
            isPopupOpen = true; // Відзначаємо, що вікно відкрите
        }, 0); // Затримка на 300 мс для плавності
    }

    function closePopup(popupElement, blurOverlay, iconElement) {
        popupElement.style.display = 'none';
        blurOverlay.style.display = 'none';
        iconElement.classList.remove('bx-rotate-180');
        document.body.style.overflow = ''; // Відновити прокручування сторінки
        isPopupOpen = false; // Відзначаємо, що вікно закрите
    }

    // Події для кнопок та вікон
    var categoryLink = document.getElementById('categoryLink');
    var categoryPopup = document.getElementById('categoryPopupq1');
    var categoryBlur = document.getElementById('blur-overlay2');
    var categoryIcon = document.getElementById('categoryIcon');
    var categoryClose = document.getElementById('categoryPopupClose');

    categoryLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (isPopupOpen) {
            closePopup(categoryPopup, categoryBlur, categoryIcon);
        } else {
            openPopup(categoryPopup, categoryBlur, categoryIcon);
        }
    });

    categoryClose.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup(categoryPopup, categoryBlur, categoryIcon);
    });

    var typeLink = document.getElementById('typeLink');
    var typePopup = document.getElementById('typePopup1');
    var typeBlur = document.getElementById('blur-overlay3');
    var typeIcon = document.getElementById('typeIcon');
    var typeClose = document.getElementById('typePopupClose');

    typeLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (isPopupOpen) {
            closePopup(typePopup, typeBlur, typeIcon);
        } else {
            openPopup(typePopup, typeBlur, typeIcon);
        }
    });

    typeClose.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup(typePopup, typeBlur, typeIcon);
    });

    var collectionLink = document.getElementById('collectionLink');
    var collectionPopup = document.getElementById('collectionPopup1');
    var collectionBlur = document.getElementById('blur-overlay4');
    var collectionIcon = document.getElementById('collectionIcon');
    var collectionClose = document.getElementById('collectionPopupClose');

    collectionLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (isPopupOpen) {
            closePopup(collectionPopup, collectionBlur, collectionIcon);
        } else {
            openPopup(collectionPopup, collectionBlur, collectionIcon);
        }
    });

    collectionClose.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup(collectionPopup, collectionBlur, collectionIcon);
    });

    var refineLink = document.getElementById('refineLink');
    var refinePopup = document.getElementById('refinePopup1');
    var refineBlur = document.getElementById('custom-blur-overlay');
    var refineIcon = document.getElementById('refineIcon');
    var refineClose = document.getElementById('refineClose');

    refineLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (isPopupOpen) {
            closePopup(refinePopup, refineBlur, refineIcon);
        } else {
            openPopup(refinePopup, refineBlur, refineIcon);
        }
    });

    refineClose.addEventListener('click', function(event) {
        event.preventDefault();
        closePopup(refinePopup, refineBlur, refineIcon);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var refineLink = document.getElementById('refineLink');
    var refineIcon = document.getElementById('refineIcon');
    var refinePopup = document.getElementById('refinePopup1');
    var blurOverlay = document.getElementById('custom-blur-overlay');
    var bottomLine = document.querySelector('.bottom-line');
    var lastWindowWidth = window.innerWidth;

    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = '';
    }

    function updatePopupPosition() {
        if (bottomLine) {
            var rect = bottomLine.getBoundingClientRect();
            var topPosition = rect.bottom + window.scrollY + 1; // 1px нижче .bottom-line
            refinePopup.style.position = 'absolute';
            refinePopup.style.top = topPosition + 'px';
        }
    }

    function openRefinePopup(event) {
        event.stopPropagation(); // Зупиняє розповсюдження події
        event.preventDefault(); // Запобігає виконанню стандартної дії

        // Прокручуємо сторінку до верху і після цього відкриваємо вікно
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Відкриваємо вікно після завершення прокрутки
        setTimeout(function() {
            updatePopupPosition();
            refinePopup.classList.add('active');
            blurOverlay.classList.add('active');
            refineIcon.classList.add('bx-rotate-180');
            disableScroll();
        }, 500); // Затримка в 500 мс, щоб дати час на завершення прокрутки
    }

    function closeRefinePopup() {
        refinePopup.classList.remove('active');
        blurOverlay.classList.remove('active');
        refineIcon.classList.remove('bx-rotate-180');
        enableScroll();
    }

    function checkWindowSize() {
        var currentWindowWidth = window.innerWidth;
        if (currentWindowWidth !== lastWindowWidth) {
            lastWindowWidth = currentWindowWidth;

            // Закрити модальне вікно при зміні розміру, якщо воно відкрите
            if (refinePopup.classList.contains('active')) {
                closeRefinePopup();
            }

            // Перевірити, чи кнопка "Уточнити" видима, і оновити події
            if (window.innerWidth <= 768) {
                refineLink.addEventListener('click', toggleRefinePopup);
            } else {
                refineLink.removeEventListener('click', toggleRefinePopup);
            }
        }
    }

    function toggleRefinePopup(event) {
        if (refinePopup.classList.contains('active')) {
            closeRefinePopup();
        } else {
            openRefinePopup(event);
        }
    }

    // Ініціалізація
    if (window.innerWidth <= 768) {
        refineLink.addEventListener('click', toggleRefinePopup);
    }

    blurOverlay.addEventListener('click', function() {
        closeRefinePopup();
    });

    // Оновлення позиції при прокручуванні сторінки
    window.addEventListener('scroll', function() {
        if (refinePopup.classList.contains('active')) {
            updatePopupPosition();
        }
    });

    // Оновлення позиції при зміні розміру вікна
    window.addEventListener('resize', checkWindowSize);
});

//
function toggleList(button) {
    const lists = document.querySelectorAll('.sorting-list');
    lists.forEach(list => {
        if (list !== button.nextElementSibling && list.style.display === 'block') {
            list.style.display = 'none';
            const icon = list.previousElementSibling.querySelector('.fas');
            const title = list.previousElementSibling.querySelector('.sorting-title');
            icon.style.transform = '';
            title.style.color = '';
        }
    });

    const list = button.nextElementSibling;
    const icon = button.querySelector('.fas');
    const title = button.querySelector('.sorting-title');

    if (list.style.display === 'block') {
        list.style.display = 'none';
        icon.style.transform = '';
        title.style.color = '';
    } else {
        list.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
        title.style.color = '#000';
    }
}

function toggleList(button) {
    const list = button.nextElementSibling;
    const isVisible = list.style.display === "block";
    document.querySelectorAll(".sorting-list").forEach(el => el.style.display = "none");
    list.style.display = isVisible ? "none" : "block";
}

function toggleList(button) {
    const list = button.nextElementSibling;
    const isVisible = list.classList.contains("show");

    // Закриваємо всі інші списки
    document.querySelectorAll(".sorting-list").forEach(el => {
        el.classList.remove("show");
        el.querySelectorAll("li").forEach(item => item.classList.remove("show"));
    });

    if (!isVisible) {
        list.classList.add("show");
        // Анімація для кожного пункту
        list.querySelectorAll("li").forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 100); // Затримка для кожного пункту
        });
    }

}
// Функція для відкриття/закриття списків
function toggleList(button) {
    const list = button.nextElementSibling;
    const isVisible = list.classList.contains("show");

    // Закриваємо всі інші списки
    document.querySelectorAll(".sorting-list").forEach(el => {
        if (el !== list) {
            el.classList.remove("show");
        }
    });

    // Перемикаємо видимість поточного списку
    if (!isVisible) {
        list.classList.add("show");
    } else {
        list.classList.remove("show");
    }
}

// Додаємо функціонал для пунктів списку
document.querySelectorAll(".sorting-list li").forEach(item => {
    item.addEventListener("click", function() {
        const list = this.parentNode; // Отримуємо батьківський список

        // Знімаємо клас active з усіх елементів у цьому списку
        list.querySelectorAll("li").forEach(li => li.classList.remove("active"));

        // Додаємо клас active до натиснутого елемента
        this.classList.add("active");

        // Закриваємо список після натискання
        list.classList.remove("show");
    });
});

function toggleHeart(icon) {
    // Перемикаємо клас іконки
    if (icon.classList.contains('bx-heart')) {
        icon.classList.remove('bx-heart');
        icon.classList.add('bxs-heart');
    } else {
        icon.classList.remove('bxs-heart');
        icon.classList.add('bx-heart');
    }
}
// Фільтри для категорій, типів і брендів
let selectedCategory = 'всі'; // За замовчуванням - всі категорії
let selectedType = 'всі'; // За замовчуванням - всі типи
let selectedBrand = 'всі'; // За замовчуванням - всі бренди

// Функція для фільтрації продуктів
function filterProducts() {
    document.querySelectorAll('.product').forEach((product) => {
        const productCategory = product.getAttribute('data-category').toLowerCase();
        const productType = product.getAttribute('data-type').toLowerCase();
        const productBrand = product.getAttribute('data-brand').toLowerCase();

        const categoryMatch = selectedCategory === 'всі' || productCategory === selectedCategory;
        const typeMatch = selectedType === 'всі' || productType === selectedType;
        const brandMatch = selectedBrand === 'всі' || productBrand === selectedBrand;

        if (categoryMatch && typeMatch && brandMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Обробка натискання на "Категорія"
document.querySelectorAll('.sorting-item:nth-child(1) .sorting-list li').forEach((item) => {
    item.addEventListener('click', function() {
        selectedCategory = this.textContent.toLowerCase();
        filterProducts();
        closeAllLists(); // Закриваємо всі відкриті списки
    });
});

// Обробка натискання на "Тип товару"
document.querySelectorAll('.sorting-item:nth-child(2) .sorting-list li').forEach((item) => {
    item.addEventListener('click', function() {
        selectedType = this.textContent.toLowerCase();
        filterProducts();
        closeAllLists(); // Закриваємо всі відкриті списки
    });
});

// Обробка натискання на "Бренди"
document.querySelectorAll('.sorting-item:nth-child(3) .sorting-list li').forEach((item) => {
    item.addEventListener('click', function() {
        selectedBrand = this.textContent.toLowerCase();
        filterProducts();
        closeAllLists(); // Закриваємо всі відкриті списки
    });
});

// Функція для відкриття/закриття списків фільтрів
function toggleList(button) {
    const list = button.nextElementSibling;
    const isOpen = list.style.display === 'block';
    closeAllLists(); // Закриваємо всі відкриті списки
    if (!isOpen) {
        list.style.display = 'block'; // Відкриваємо тільки потрібний список
    }
}

// Функція для закриття всіх списків
function closeAllLists() {
    document.querySelectorAll('.sorting-list').forEach((list) => {
        list.style.display = 'none';
    });
}

// Закриття списків при кліку поза ними
document.addEventListener('click', (event) => {
    const isButton = event.target.closest('.sorting-button');
    const isListItem = event.target.closest('.sorting-list');
    if (!isButton && !isListItem) {
        closeAllLists();
    }
});