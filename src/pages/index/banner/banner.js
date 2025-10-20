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
            slidesPerView: 1,
        },
        864: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});
