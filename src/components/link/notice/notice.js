import './notice.scss';

let removeClassDelay;
let removeDivDelay;

function showNotice(linkText) {
    clearTimeout(removeClassDelay);
    clearTimeout(removeDivDelay);

    if (document.body.querySelector('.notice')) {
        document.body.removeChild(document.body.querySelector('.notice'));
    }
    const notice = document.createElement('div');
    notice.classList.add('notice');
    document.body.appendChild(notice);
    notice.innerText = `Извините, ${linkText} еще в разработке`;
    setTimeout(() => {
        notice.classList.add('active');
    }, 100);
    removeClassDelay = setTimeout(() => {
        notice.classList.remove('active');
        removeDivDelay = setTimeout(() => {
            document.body.removeChild(notice);
        }, 1000);
    }, 2000);
}

export default showNotice;
