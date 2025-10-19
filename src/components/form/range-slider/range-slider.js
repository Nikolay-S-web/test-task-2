const range = document.querySelector('.form-range');
const value = range.querySelector('.form-range__value');
const input = range.querySelector('.form-range__input');
const valueParent = input.closest('.form-range__input');
const maxElement = range.querySelector('.form-range__max');
const minElement = range.querySelector('.form-range__min');
const min = input.min;
const max = input.max;

function getThumbPosition() {
    let k = (parseInt(max) - parseInt(min)) / 100;
    // console.log(parseInt(input.value) / k);
    return parseInt(input.value) / k;
}

function moveValue() {
    const valueParentWidth = valueParent.getBoundingClientRect().width;
    const valueWidth = value.getBoundingClientRect().width;
    const space = valueParentWidth - valueWidth;
    let position = (space / 100) * getThumbPosition();
    // console.log(space);
    // console.log(position);
    value.style.left = position + 'px';
}

function formatValue(value) {
    if (value.toString.length > 3) return value;
    let counter = 0;
    let tempValue = value.split('').reverse();
    let result = [];
    tempValue.forEach((item) => {
        result.push(item);
        if (!(++counter % 3)) result.push(' ');
    });
    return result.reverse().join('');
}

window.addEventListener('DOMContentLoaded', function () {
    value.textContent = formatValue(input.value);
    minElement.textContent = formatValue(min);
    maxElement.textContent = formatValue(max);
    moveValue();
});
window.addEventListener('resize', function () {
    moveValue();
});
input.addEventListener('input', () => {
    value.textContent = formatValue(input.value);
    moveValue();
});
