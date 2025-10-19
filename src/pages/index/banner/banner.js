import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    speed: 400,
    spaceBetween: 76,
    autoHeight: true,

    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        640: {
            slidesPerView: 1, // Для мобильных устройств
        },
        864: {
            slidesPerView: 2, // Для планшетов
        },
        // 1024: {
        //     slidesPerView: 2, // Для десктопов
        // },
        1280: {
            slidesPerView: 3, // Для больших экранов
        },
    },
    on: {
        // Дополнительное обновление высоты после инициализации
        init: function () {
            this.updateAutoHeight();
        },
    },
});
console.log('ok');
