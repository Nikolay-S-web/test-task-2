import './menu-button/menu-button';
const header = document.querySelector('.header');
const headerNavigation = header.querySelector('.header__navigation');

function toggleHeaderSize() {
    if (window.scrollY > 45) {
        header.classList.add('scrolled');
    } else if (window.scrollY < 35) {
        header.classList.remove('scrolled');
    }
}

function checkDisplay(element) {
    if (window.getComputedStyle(element).display !== 'none') return true;
    return false;
}

function setAriaAttributes(element) {
    if (checkDisplay(element)) {
        element.setAttribute('aria-hidden', 'false');
        element.setAttribute('focusable', 'true');
    } else {
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('focusable', 'false');
    }
}

window.addEventListener('scroll', toggleHeaderSize);
window.addEventListener('resize', () => {
    setAriaAttributes(headerNavigation);
});

window.addEventListener('DOMContentLoaded', () => {
    setAriaAttributes(headerNavigation);
});
