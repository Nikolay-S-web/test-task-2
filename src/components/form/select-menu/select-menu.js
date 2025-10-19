const selectMenus = document.querySelectorAll('.select-menu');

selectMenus.forEach((selectMenu) => {
    const selectMenuField = selectMenu.querySelector('.select-menu__field');
    const choiceField = selectMenu.querySelector('.select-menu__choice');
    const selectMenuList = selectMenu.querySelector('.select-menu__list');
    const selectMenuItems = selectMenu.querySelectorAll('.select-menu__item');
    const selectMenuInput = selectMenu.querySelector('[name^="select"]');

    if (selectMenuItems.length) {
        selectItem(selectMenuItems[0]);
    }

    function closeDropdown() {
        if (selectMenu.classList.contains('active')) {
            selectMenu.classList.remove('active');
            selectMenuList.classList.remove('active');
        }
    }
    function toggleDropdown() {
        selectMenu.classList.toggle('active');
        selectMenuList.classList.toggle('active');
    }

    function selectItem(e) {
        choiceField.innerHTML = e.innerHTML;
        selectMenuInput.value = e.textContent;
    }

    selectMenu.addEventListener('click', toggleDropdown);

    selectMenuItems.forEach((item) => {
        item.addEventListener('click', () => {
            selectItem(item);
        });
    });
    document.addEventListener('click', (event) => {
        if (!selectMenuField.contains(event.target)) {
            closeDropdown();
        }
    });
});
