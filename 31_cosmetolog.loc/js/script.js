$(document).ready(() => {
    // $(document).on("scroll",()=>{
    //     if($(document).scrollTop() >= 100){
    //         $(".header__top").css({"display":"none"});
    //     }else{
    //         $(".header__top").css({"display":"block"});
    //     }
    // });
    $(".single--personal__obrazovanie_learnmore").on("click", () => {
        $(".single--personal__obrazovanie").toggleClass("show");
        $(".single--personal__obrazovanie_learnmore").toggleClass('active');
        return false;
    });
    // beforeAfter start
    var checkAfterBefore = false;
    $("#afterbefore").after(`<img src="${$("#afterbefore").attr("data-aftersrc")}" style="clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);" class="d-afterbefore">`);
    $("#afterbefore").after(`<div class="d-afterbefore-line"></div>`);
    // $("#afterbefore").after(`<`);
    $(".afterbefore .banner__slider_item").on("mousedown", () => {
        checkAfterBefore = true;
        return false;
    });
    $(".afterbefore .banner__slider_item").on("touchstart", () => {
        checkAfterBefore = true;
        return false;
    });
    $(document).on("mouseup", () => {
        checkAfterBefore = false;
    });
    $(document).on("touchend", () => {
        checkAfterBefore = false;
    });
    $(document).on('mousemove', (e) => {
        if (checkAfterBefore) {
            let posX = e.clientX - $(".afterbefore .banner__slider_item")[0].getBoundingClientRect().left,
                layerWidth = $(".afterbefore .banner__slider_item").width(),
                showArea = posX * 100 / layerWidth;
            if (showArea < 0) {
                showArea = 0;
            }
            if (showArea > 100) {
                showArea = 100;
            }
            $('.d-afterbefore').css({ "clip-path": `polygon(${showArea}% 0%, 100% 0%, 100% 100%, ${showArea}% 100%)` });
            $('.d-afterbefore-line').css({ "left": `${showArea}%` })
        }
    });
    $(document).on('touchmove', (e) => {
        if (checkAfterBefore) {
            let posX = e.touches[0].clientX - $(".afterbefore .banner__slider_item")[0].getBoundingClientRect().left,
                layerWidth = $(".afterbefore .banner__slider_item").width(),
                showArea = posX * 100 / layerWidth;
            if (showArea < 0) {
                showArea = 0;
            }
            if (showArea > 100) {
                showArea = 100;
            }
            $('.d-afterbefore').css({ "clip-path": `polygon(${showArea}% 0%, 100% 0%, 100% 100%, ${showArea}% 100%)` });
            $('.d-afterbefore-line').css({ "left": `${showArea}%` })
        }
    });
    // beforeAfter end
    $(".photogallery__tab").each((index, item) => {
        $(item).on("click", () => {
            $('.photogallery__tab.active').removeClass('active');
            $(item).addClass("active");
            $(".photogallery__grid.active").removeClass("active");
            $($(item).attr("href")).addClass("active");
            return false;
        });
    });
    $(".photogallery__grid .learnmore").each((index, item) => {
        $(item).on("click", () => {
            $(item)[0].parentElement.parentElement.querySelectorAll(".photogallery__item.d-hide").forEach(item => {
                item.classList.toggle("show");
            });
            return false;
        });
    });
    $(".videoblog__learnmore").on("click", () => {
        $(".videoblog__item.d-hide").each((index, item) => {
            $(item).toggleClass("show");
        });
        return false;
    });
    $(".formstar").each((index, item) => {
        $(item).on("change", () => {
            let nums = $(".formstar:checked").val();
            $(".form__star svg path").css({"fill":"#3d3d3d"});
            $(".form__star svg path").each((index, item)=>{
                if(index < nums){
                    $(item).css({"fill":"#EFBF13"});
                }
            })
        })
    });
    $(".menuBTN").on("click",()=>{
        $(".menuBTN").toggleClass("active");
        $(".header__nav").toggleClass("active");
    });
    $(".showmodal").each((index, item)=>{
        $(item).on("click",()=>{
            let href = $(item).attr("href");
            $(`.modal--wrapper${href}`).addClass("show");
            return false;
        });
    });
    $(".modal--wrapper__close").each((index, item)=>{
        $(item).on("click",()=>{
            $(".modal--wrapper.show").removeClass("show");
            return false;
        });
    });
    // Sliders
    $(".banner__slider").slick({ 
        dots: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="20" height="42" viewBox="0 0 20 42" fill="none"><path d="M16.0369 41.1689L0.506912 22.5514C0.322581 22.3298 0.19232 22.0897 0.116129 21.8311C0.0387097 21.5726 0 21.2955 0 21C0 20.7045 0.0387097 20.4274 0.116129 20.1689C0.19232 19.9103 0.322581 19.6702 0.506912 19.4485L16.0369 0.775725C16.467 0.258575 17.0046 0 17.6498 0C18.2949 0 18.8479 0.277045 19.3088 0.831134C19.7696 1.38522 20 2.03166 20 2.77045C20 3.50923 19.7696 4.15567 19.3088 4.70976L5.76037 21L19.3088 37.2902C19.7389 37.8074 19.9539 38.4442 19.9539 39.2007C19.9539 39.9587 19.7235 40.6148 19.2627 41.1689C18.8018 41.723 18.2642 42 17.6498 42C17.0353 42 16.4977 41.723 16.0369 41.1689Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none"><path d="M3.96313 0.791559L19.4931 18.5224C19.6774 18.7335 19.8077 18.9622 19.8839 19.2084C19.9613 19.4547 20 19.7186 20 20C20 20.2814 19.9613 20.5453 19.8839 20.7916C19.8077 21.0378 19.6774 21.2665 19.4931 21.4776L3.96314 39.2612C3.53303 39.7537 2.99539 40 2.35023 40C1.70507 40 1.15208 39.7361 0.691248 39.2084C0.230419 38.6807 3.64554e-06 38.0651 3.58403e-06 37.3615C3.52252e-06 36.6579 0.230419 36.0422 0.691248 35.5145L14.2396 20L0.691245 4.48549C0.261138 3.99296 0.0460822 3.38646 0.0460821 2.66596C0.046082 1.94407 0.276497 1.31926 0.737326 0.791559C1.19816 0.263853 1.73579 1.59671e-06 2.35023 1.54299e-06C2.96467 1.48928e-06 3.5023 0.263853 3.96313 0.791559Z" fill="white"/></svg>`
    });
    $(".services--slider__slider").slick({
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2488 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".specs--slider__slider").slick({
        infinite: true,
        slidesToShow: 2,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2488 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".personal--slider__slider").slick({
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2488 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".about--wrapper__slider").slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9" fill-opacity="0.5"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2489 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9" fill-opacity="0.5"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`
    });
    $(".feedbacks__slider").slick({
        infinite: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2488 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".blog--slider__slider").slick({
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: `<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#D9D9D9"/><path d="M33.0184 40.5844L25.2535 31.2757C25.1613 31.1649 25.0962 31.0449 25.0581 30.9156C25.0194 30.7863 25 30.6478 25 30.5C25 30.3522 25.0194 30.2137 25.0581 30.0844C25.0962 29.9551 25.1613 29.8351 25.2535 29.7243L33.0184 20.3879C33.2335 20.1293 33.5023 20 33.8249 20C34.1475 20 34.424 20.1385 34.6544 20.4156C34.8848 20.6926 35 21.0158 35 21.3852C35 21.7546 34.8848 22.0778 34.6544 22.3549L27.8802 30.5L34.6544 38.6451C34.8694 38.9037 34.977 39.2221 34.977 39.6004C34.977 39.9794 34.8618 40.3074 34.6313 40.5844C34.4009 40.8615 34.1321 41 33.8249 41C33.5177 41 33.2488 40.8615 33.0184 40.5844Z" fill="white"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#D9D9D9"/><path d="M26.9816 19.4156L34.7465 28.7243C34.8387 28.8351 34.9038 28.9551 34.9419 29.0844C34.9806 29.2137 35 29.3522 35 29.5C35 29.6478 34.9806 29.7863 34.9419 29.9156C34.9038 30.0449 34.8387 30.1649 34.7465 30.2757L26.9816 39.6121C26.7665 39.8707 26.4977 40 26.1751 40C25.8525 40 25.576 39.8615 25.3456 39.5844C25.1152 39.3074 25 38.9842 25 38.6148C25 38.2454 25.1152 37.9222 25.3456 37.6451L32.1198 29.5L25.3456 21.3549C25.1306 21.0963 25.023 20.7779 25.023 20.3996C25.023 20.0206 25.1383 19.6926 25.3687 19.4156C25.5991 19.1385 25.8679 19 26.1751 19C26.4823 19 26.7512 19.1385 26.9816 19.4156Z" fill="white"/></svg>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});