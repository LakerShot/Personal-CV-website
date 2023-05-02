import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

export const initEducationCarousel = (): void => {
    new Swiper<Swiper>('.education__carousel', {
        direction: "vertical",
        spaceBetween: 40,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
    })
}
