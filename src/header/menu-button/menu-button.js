const menuButton = document.querySelector('.header__menu-button');
const headerMobileMenu = document.querySelector('.header__mobile-menu');

const defaultLabel = 'открыть меню';
const openedLabel = 'закрыть меню';

function clickHandler() {
    let label = menuButton.getAttribute('aria-label');

    headerMobileMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
    toggleScroll(document.body);

    label = defaultLabel ? openedLabel : defaultLabel;
    menuButton.setAttribute('aria-label', label);
}

function blockScroll(element) {
    element.style.overflow = 'hidden';
}
function unBlockScroll(element) {
    element.style.overflow = 'visible';
}
function toggleScroll(element) {
    if (window.getComputedStyle(element).overflow === 'visible') {
        blockScroll(element);
    } else {
        unBlockScroll(element);
    }
}

menuButton.addEventListener('click', clickHandler);
