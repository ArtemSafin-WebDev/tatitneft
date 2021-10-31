import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function interfaceSlider() {
    const elements = Array.from(document.querySelectorAll('.js-interface-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            speed: 400,
            navigation: {
                nextEl: element.querySelector('.inteface__slider-arrow--next'),
                prevEl: element.querySelector('.inteface__slider-arrow--prev')
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    });
}
