$(document).ready(() => {
    $(".service--materials .we--get__text").each((index, item)=>{
        if($(item).find(">div").innerHeight() > 360){
            $(item).append('<span class="we--get__learnmore">Читать еще</span>')
        }
        let learnmore = $(item).find(".we--get__learnmore");
        learnmore.on("click",()=>{
            $(item).toggleClass("show");
            $(item).hasClass('show') ? learnmore.html("Скрыть") : learnmore.html("Читать ещё");
        });
    });
    $(document).on("click",()=>{
        $('.header__sidemenu').removeClass('show');
        $('.header__sidemenu_btn').removeClass("active");
        $('body').css({"overflow":""});
    });
    $('.header__sidemenu').on('click',(e)=>{
        e.stopPropagation();
    });
    $(".header__sidemenu_btn").on("click",(e)=>{
        e.stopPropagation();
        $('.header__sidemenu').toggleClass('show');
        if($('.header__sidemenu').hasClass('show')){
            $('.header__sidemenu_btn').addClass("active");
            $('body').css({"overflow":"hidden"});
        }else{
            $('.header__sidemenu_btn').removeClass("active");
            $('body').css({"overflow":""});
        }
    });
    $("#menuBtn").on("click",(e)=>{
        e.stopPropagation();
        $('.header__sidemenu').toggleClass('show');
        if($('.header__sidemenu').hasClass('show')){
            $('.header__sidemenu_btn').addClass("active");
            $('body').css({"overflow":"hidden"});
            $("#menuBtn").addClass("active");
        }else{
            $('.header__sidemenu_btn').removeClass("active");
            $('body').css({"overflow":""});
            $("#menuBtn").removeClass("active");
        }
    });
    $(`.modalwindow`).on("click",(e)=>{
        e.stopPropagation();
    });
    $(".showmodal").on('click',(e)=>{
        let modalId = $(e.target).attr("href");
        console.log($(`.modalwindow${modalId}`));

        $('.header__sidemenu_btn').removeClass("active");
        $(`.modalwindow`).removeClass('active');
        $('body').css({"overflow":"hidden"});
        $(`.modalwindow${modalId}`).addClass('active');
        return false;
    });
    $(".modalwindow__close").on("click",()=>{
        $('body').css({"overflow":""});
        $(`.modalwindow`).removeClass('active');
    });
});
let mainBanner = new Swiper(".main--banner .swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        prevEl: '.main--banner .swiper-button-prev',
        nextEl: '.main--banner .swiper-button-next'
    },
    pagination: {
        el: '.main--banner .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    parallax: true,
    speed: 1000
});
let itemsSlider = new Swiper(".items--slider .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.items--slider .swiper-button-prev',
        nextEl: '.items--slider .swiper-button-next'
    },
    pagination: {
        el: '.items--slider .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
let adventages = new Swiper(".adventages .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.adventages .swiper-button-prev',
        nextEl: '.adventages .swiper-button-next'
    },
    pagination: {
        el: '.adventages .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000
});
let weproduction = new Swiper(".we--production .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.we--production .swiper-button-prev',
        nextEl: '.we--production .swiper-button-next'
    },
    pagination: {
        el: '.we--production .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000
});
let weget = new Swiper(".we--get .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.we--get .swiper-button-prev',
        nextEl: '.we--get .swiper-button-next'
    },
    pagination: {
        el: '.we--get .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000
});
let wegetmaterials = new Swiper(".service--materials .items--slider__wrapper .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.service--materials .items--slider__wrapper .swiper-button-prev',
        nextEl: '.service--materials .items--slider__wrapper .swiper-button-next'
    },
    pagination: {
        el: '.service--materials .items--slider__wrapper .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
});
let wegettypes = new Swiper(".service--materials .adventages__slider_wrapper .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.service--materials .adventages__slider_wrapper .swiper-button-prev',
        nextEl: '.service--materials .adventages__slider_wrapper .swiper-button-next'
    },
    pagination: {
        el: '.service--materials .adventages__slider_wrapper .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000
});
let moreservices = new Swiper(".more--services .swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        prevEl: '.more--services .swiper-button-prev',
        nextEl: '.more--services .swiper-button-next'
    },
    pagination: {
        el: '.more--services .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 1000,
    breakpoints: {
        1200: {
            slidesPerView: 2,
        }
    }
});