$(document).ready(() => {
    var lastScrollTop = $(document).scrollTop();
    $(document).on("scroll", (e) => {
        let st = $(document).scrollTop();
        if (st > lastScrollTop) {
            $(".header").css({ "top": `-${$(".header__top").innerHeight() + $(".header__middle").innerHeight()}px` });
        } else {
            $(".header").css({ "top": 0 });
        }
        lastScrollTop = st;
    });
    $(document).on("click", () => {
        $(".header__bottom_catalog").removeClass("active");
    });
    $(".header__bottom_catalog").on('click', (e) => {
        e.stopPropagation();
    });
    $(".header__catalog_btn").on("click", () => {
        $(".header__bottom_catalog").toggleClass("active");
        return false;
    });

    new Swiper('.main--banner__slider', {
        loop: true,
        navigation: {
            nextEl: '.main--banner__slider--wrapper .swiper-button-next',
            prevEl: '.main--banner__slider--wrapper .swiper-button-prev',
        },
        pagination: {
            el: '.main--banner__slider--wrapper .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 24
    });

    new Swiper('.category--items__wrapper .swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.category--items__wrapper .swiper-button-next',
            prevEl: '.category--items__wrapper .swiper-button-prev',
        },
        pagination: {
            el: '.category--items__wrapper .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                grid: {
                    rows: 2
                },
            },
            992: {
                slidesPerView: 3,
                grid: {
                    rows: 2
                }
            }
        }
    });
    new Swiper(".specials--banner__slider .swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.specials--banner__slider .swiper-button-next',
            prevEl: '.specials--banner__slider .swiper-button-prev',
        },
        pagination: {
            el: '.specials--banner__slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            }
        }
    });
    new Swiper(".last--blog__slider .swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.last--blog__slider .swiper-button-next',
            prevEl: '.last--blog__slider .swiper-button-prev',
        },
        pagination: {
            el: '.last--blog__slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            676: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3
            }
        }
    });
    new Swiper(".masters__slider .swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.masters__slider .swiper-button-next',
            prevEl: '.masters__slider .swiper-button-prev',
        },
        pagination: {
            el: '.masters__slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            575: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            }
        }
    });
    new Swiper(".last--works__slider .swiper", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.last--works__slider .swiper-button-next',
            prevEl: '.last--works__slider .swiper-button-prev',
        },
        pagination: {
            el: '.last--works__slider .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            }
        }
    });
    let compareSlider = new Swiper(".compare__slider", {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 24,
        navigation: {
            nextEl: '.compare__items .swiper-button-next',
            prevEl: '.compare__items .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
    specSlider = new Swiper(".spec_slider", {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
    compareSlider.on("slideChange", () => {
        specSlider.forEach((item) => {
            item.slideToLoop(compareSlider.realIndex);
        })
    });
    $(".single--product__tab").on("click", (e) => {
        let panelId = $(e.target).attr("href");
        $(".single--product__tab").removeClass("active");
        $(e.target).addClass("active");
        $(".single--product__panel").removeClass("active");
        $(`.single--product__panel${panelId}`).addClass("active");
        return false;
    });
    $(".showmodal").on("click", (e) => {
        let modalId = $(e.target).attr('href');
        $('.modalwindow').removeClass("active");
        $("body").css({ "overflow": "hidden", 'left': '0px' });
        $(`.modalwindow${modalId}`).addClass("active");
        $("#menuBtn").removeClass("active");
        $(".lightgrey").removeClass("active");
        $('.header--mobile__menu').removeClass("active");
        return false;
    });
    $(".modalwindow__close").on("click", (e) => {
        $('.modalwindow').removeClass("active");
        $("body").css({ "overflow": "auto" });
    });
    $("#menuBtn").on("click", () => {
        $("#menuBtn").toggleClass("active");
        $(".lightgrey").toggleClass("active");
        $('.header--mobile__menu').toggleClass("active");
        $("#menuBtn").hasClass("active") ? $("body").css({ "overflow": "hidden", "left": "320px" }) : $("body").css({ "overflow": "auto", 'left': '0px' });
    });
});