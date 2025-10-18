const userBlock = document.querySelector('.user');
const avatar = userBlock.querySelector('.user__avatar');

function checkUser(userElement) {
    if (userBlock.dataset.hasUser === 'true') return true;
    return false;
}
console.log(checkUser(userBlock));
