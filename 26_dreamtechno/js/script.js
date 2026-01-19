$(document).ready(() => {
    var check = 0;
    $(".header__category .nav__item").each((index, item) => {
        $(item).on("mouseover", () => {
            $(".header__category .nav__item").each((i, k) => {
                $(k).removeClass("active");
            });
            $(".header__panel").each((i, k) => {
                $(k).removeClass("active");
            });
            $(item).addClass("active");
            $(".header__panel").eq(index).addClass("active");
        });
    });
    $(".header__navcatalog").on("click", () => {
        $(".header__category").toggleClass("show");
    });
    $(".header__category").on("mouseover", () => {
        check = false;
    });
    $(".header__category").on("mouseout", () => {
        check = true;
    });
    $(".header__numbersarrow").on('click', () => {
        $(".header__numbers_ul").toggleClass("show");
    });
    $(".header__numbers_ul").on("mouseover", () => {
        check = false;
    });
    $(".header__numbers_ul").on("mouseout", () => {
        check = true;
    });
    $(document).on('click', () => {
        if (check) {
            $(".header__numbers_ul").removeClass("show");
            $(".header__category").removeClass("show");

            $(".header__category .nav__item").each((i, k) => {
                $(k).removeClass("active");
            });
            $(".header__panel").each((i, k) => {
                $(k).removeClass("active");
            });
            $(".header__category .nav__item").eq(0).addClass("active");
            $(".header__panel").eq(0).addClass("active");
            check = false;
        }
    })
    $(".single__product_tab").each((i, item) => {
        $(item).on('click', () => {
            $(".single__product_tab.active").removeClass("active");
            $(".single__product_panel.show").removeClass("show");
            $(item).addClass("active");
            $(".single__product_panel" + $(item).attr("href")).addClass("show");
            return false;
        });
    });
    $(".garant__pagination_item .garant__pagination_item_name").each((index, item) => {
        $(item).on('click', (e) => {
            $(item).parent().toggleClass("active");
        });
    });
    $(".compare__category p").each((index, item) => {
        $(item).on('click', () => {
            $(".compare__category").toggleClass("hide");
        });
    });

    $("[name='delivery']").each((index, item) => {
        $(item).on("change", () => {
            if (item.value == 2) {
                $(".checkout__panel_delivery_company").addClass("show");
            } else {
                $(".checkout__panel_delivery_company").removeClass("show");
            }
            if (item.value == 3) {
                $(".checkout__panel_address").eq(0).removeClass("show");
                $(".checkout__panel_address").eq(1).addClass("show");
            } else {
                $(".checkout__panel_address").eq(1).removeClass("show");
                $(".checkout__panel_address").eq(0).addClass("show");
            }
        });
    });
    $("#menuBtn").on('click', () => {
        $(".header__bottom").toggleClass("show");
        $(".header__navcatalog").removeClass('show');
    });
    $(".header__navcatalog > label").on("click", () => {
        $(".header__navcatalog").toggleClass('show');
    });
    $(".mainBanner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: 0,
        autoplay: 1,
        autoplaySpeed: 5000,
        prevArrow: '<svg width="72" class="slick-arrow prev" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg width="72" class="slick-arrow next" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>'
    });
    $(".recommendSlider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg width="72" class="slick-arrow prev" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg width="72" class="slick-arrow next" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".single__product_gallery").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.single__product_thumb',
        prevArrow: '<svg width="72" class="slick-arrow prev" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg width="72" class="slick-arrow next" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
        ]

    });
    $(".single__product_thumb").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: 0,
        asNavFor: '.single__product_gallery',
        fade: true,
        cssEase: 'linear'
    });
    $(".workedSlider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg width="72" class="slick-arrow prev" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg width="72" class="slick-arrow next" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })
    $(".compareSlider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        asNavFor: '.compareSpecsSlider',
        cssEase: 'ease',
        prevArrow: '<svg width="72" class="slick-arrow prev" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg width="72" class="slick-arrow next" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_121_9067)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_121_9067" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_9067"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_9067" result="shape"/></filter></defs></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    $(".compareSpecsSlider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.compareSpecsSlider, .compareSlider',
        speed: 300,
        arrows: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});