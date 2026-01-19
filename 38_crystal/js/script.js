$(document).ready(() => {
    $(document).on("scroll", () => {
        $("body").css({ "--scrollTop": $(document).scrollTop() + 'px' });
    });
    $(".header__catalog_btn").on("click", () => {
        $(".header__catalog_btn").toggleClass("active");
        $('.header__catalog').toggleClass("active");
        return false;
    });

    $(".social__toggle").on("click", () => {
        $(".social__fixed").toggleClass("active");
        return false;
    });
    $(".we--worked__slider").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: `<svg class='slick-prev slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M3.14722e-06 36L25 72L9.5 36L25 0L3.14722e-06 36Z" fill="#CF0101"/></svg>`,
        nextArrow: `<svg class='slick-next slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M25 36L0 0L15.5 36L0 72L25 36Z" fill="#CF0101"/></svg>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
    $(".partners__slider").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        arrows: true,
        prevArrow: `<svg class='slick-prev slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M3.14722e-06 36L25 72L9.5 36L25 0L3.14722e-06 36Z" fill="#CF0101"/></svg>`,
        nextArrow: `<svg class='slick-next slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M25 36L0 0L15.5 36L0 72L25 36Z" fill="#CF0101"/></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
    $(".modalwindow__services_slider").slick({
        infinite: true,
        slidesToShow: 8,
        dots: false,
        arrows: true,
        prevArrow: `<svg class='slick-prev slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M3.14722e-06 36L25 72L9.5 36L25 0L3.14722e-06 36Z" fill="#CF0101"/></svg>`,
        nextArrow: `<svg class='slick-next slick-arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="72" viewBox="0 0 25 72" fill="none"><path d="M25 36L0 0L15.5 36L0 72L25 36Z" fill="#CF0101"/></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".stages__item").each((index, item) => {
        $(item).on("mousemove", () => {
            $('.stages__item.active').removeClass("active");
            $(item).addClass('active');
            $(".stages__grid").css({ "--clip": `calc(6% + calc(17% * ${index}))` });
            if (index == $(".stages__item").length - 1) {
                $(".stages__grid").css({ "--clip": `100%` });
            }
        });
    });
    $("#menuBTN").on("click", () => {
        $("#menuBTN").toggleClass("active");
        $(".modalgrey").toggleClass("active");
        $(".header__mobile--wrapper").toggleClass("active");
        if ($("#menuBTN").hasClass("active")) {
            $("body").css({ "overflow": "hidden" });
        } else {
            $("body").css({ "overflow": "auto" });
        }
        return false;
    });
    $(".showmodal").on("click", () => {
        $(".modalwindow").addClass("active");
        return false;
    });
    $(".modalwindow__close").on("click", () => {
        $(".modalwindow").removeClass("active");
        return false;
    });
});