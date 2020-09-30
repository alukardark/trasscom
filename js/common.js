jQuery(document).ready(function($) {

    var mainSwiper = new Swiper('.main__slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        autoHeight: true,
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


    var reviewsSwiper = new Swiper('.reviews__slider .swiper-container', {
        loop: true,
        autoHeight: true,
        slidesPerView: 1,
        speed: 600,
        navigation: {
            nextEl: '.reviews__slider .reviews__slider-next',
            prevEl: '.reviews__slider .reviews__slider-prev',
        },

    });


    $('.footer__up').click(function(){
        $("html, body").stop().animate({scrollTop:0}, 800);
    });


    $('.burger').click(function(){
        $('body').toggleClass('modal-open');
        // $('.burger').toggleClass('active');
        $('.header__mobile-open').toggleClass('active');
    });


});