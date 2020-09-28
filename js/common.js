jQuery(document).ready(function($) {

    var mySwiper = new Swiper('.main__slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        speed: 600,
        navigation: {
            nextEl: '.main__slider .main__slider-next',
            prevEl: '.main__slider .main__slider-prev',
        },
        pagination: {
            el: '.main__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // breakpoints: {
        //     1339: {
        //         spaceBetween: 40,
        //         slidesPerView: 3,
        //         slidesPerColumn: 2,
        //     },
        //     991: {
        //         slidesPerView: 2,
        //         spaceBetween: 40,
        //         slidesPerColumn: 2,
        //     },
        //     767: {
        //         slidesPerView: 1,
        //         slidesPerColumn: 1,
        //         spaceBetween: 15,
        //     }
        // },
    });




});