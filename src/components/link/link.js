import './notice/notice';
import showNotice from './notice/notice';

const links = document.querySelectorAll('.link');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = link.getAttribute('href');

        if (target == '') {
            event.preventDefault();
            const label = link.getAttribute('aria-label');
            if (!label) {
                showNotice(link.innerText);
                return;
            }
            showNotice(label);
            return;
        }

        if (!target.includes('#')) return;

        const targetElement = document.querySelector(target);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pageId = document.body.id;

    links.forEach((link) => {
        const target = link.getAttribute('href');
        if (target === '' || target.includes('#')) {
            return;
        }

        if (target.includes(pageId)) {
            link.classList.add('link--current');
            const targetElement = document.querySelector(`#${pageId}`);
            link.addEventListener('click', (event) => {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
    });
});
