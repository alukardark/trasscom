jQuery(document).ready(function ($) {

    var mainSwiper = new Swiper('.main__slider .swiper-container', {
        loop: true,
        slidesPerView: 1,
        // autoHeight: true,
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

    var certificatesSwiper = new Swiper('.certificates-slider__slider .swiper-container', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 24,
        speed: 600,
        navigation: {
            nextEl: '.certificates-slider__slider .certificates__slider-next',
            prevEl: '.certificates-slider__slider .certificates__slider-prev',
        },
        breakpoints: {
            1199: {
                spaceBetween: 24,
                slidesPerView: 4,
            },
            989: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
            767: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            575: {
                spaceBetween: 24,
                slidesPerView: 1,
            }
        },
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


    $('.footer__up').click(function () {
        $("html, body").stop().animate({scrollTop: 0}, 800);
    });


    $('.burger').click(function () {
        $('body').toggleClass('modal-open');
        $('.header__mobile-open').toggleClass('active');
    });


    $('.page table').wrap("<div class='scrollbar scrollbar--horizontal'></div>");
    document.querySelectorAll('.scrollbar').forEach(el => {
        new SimpleBar(el, {
            autoHide: false
        });
    });


    if ($('.submenu').length > 0) {
        $('.burger').click(function () {
            $('.header__mobile-back ').removeClass('hide');
            $('.header__menu--submenu').removeClass('hide');
            setTimeout(function () {
                $('.header__menu:not(.header__menu--submenu)').addClass('hide');
                $('.header__search').addClass('hide');
            }, 500);
        });
        $('.submenu__list li').clone().appendTo(".header__menu--submenu");

        $('.header__mobile-back ').click(function () {
            $(this).addClass('hide');
            $('.header__menu--submenu').addClass('hide');
            setTimeout(function () {
                $('.header__menu:not(.header__menu--submenu)').removeClass('hide');
                $('.header__search').removeClass('hide');
            }, 500);
        });
    } else {
        $('.header__search ').removeClass('hide');
        $('.header__mobile-back ').addClass('hide');

        $('.header__menu:not(.header__menu--submenu)').removeClass('hide');
        $('.header__menu--submenu').addClass('hide');
    }



    function mapRegions(){
        var $region = '';
        if (window.matchMedia('(max-width: 767px)').matches) {
            $("[data-marker]").unbind('click');
            $("[data-marker]").click(function () {
                var elementClick = $(this).attr("data-marker");
                console.log(elementClick);
                var destination = $("#"+elementClick).offset().top;
                jQuery("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                }, 800);
                return false;
            });
        }else{
            $("[data-marker]").unbind('click');
            $("[data-marker]").bind('click', function(){
                $region = $(this).attr("data-marker");
                $("path[class], .projects__info-box").removeClass('active');
                $("svg ."+$region).addClass('active');
                $(".projects__info-box."+$region).addClass('active');
            });
        }
    }

    mapRegions();
    $(window).resize(function() {
        mapRegions();
    });




    $(document).mouseup(function (e){
        var div = $(".projects__info-box, [data-marker]");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $("path[class], .projects__info-box").removeClass('active');
        }
    });


    $("a.projects__info-box-title").on('click', function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});