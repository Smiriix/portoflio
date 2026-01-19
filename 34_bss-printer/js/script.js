$(document).ready(() => {
    $(".main--forms__tab").each((index, item) => {
        $(item).on("click", () => {
            $(".main--forms__tab.active").removeClass("active");
            $(item).addClass("active");
            $(".main--forms__panel.active").removeClass("active");
            $(".main--forms__panel").eq(index).addClass("active");
            return false;
        })
    });
    $(".injer_next").on("click", () => {
        let formSelect = $("input[name=injer_face]:checked").val();
        if (formSelect) {
            $(".main--forms__panel.injer .main--forms__panel_item.active").removeClass("active");
            $(".main--forms__panel.injer .main--forms__panel_item").eq(formSelect).addClass("active");
        } else {
            alert("Не, ну ты хотя бы выбери что-то");
        }
        return false;
    });
    $(".injer_prev").on("click", () => {
        $(".main--forms__panel.injer .main--forms__panel_item.active").removeClass("active");
        $(".main--forms__panel.injer .main--forms__panel_item").eq(0).addClass("active");
        return false;
    });
    $(".injer_success").on("click", () => {
        $(".main--forms__panel.injer .main--forms__panel_item.active").removeClass("active");
        $(".main--forms__panel.injer .main--forms__panel_item").eq(3).addClass("active");
        return false;
    });
    $(".map--wrapper__office_btn").on("click", () => {
        $(".map--wrapper__office_list").toggleClass("hideList");
        return false;
    })
    $(".main--banner__slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        // autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: `<svg class="slick-arrow slick-prev" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="white"/><path d="M33.2683 16.5354L21.2578 28.5467C21.086 28.7183 21 28.9157 21 29.139C21 29.3624 21.086 29.5602 21.2578 29.7319L33.2683 41.7422C33.4404 41.9142 33.6378 42 33.8612 42C34.0846 42 34.2823 41.914 34.454 41.7422L35.7423 40.4538C35.9141 40.282 35.9999 40.0843 35.9999 39.861C35.9999 39.6376 35.9141 39.4399 35.7423 39.2681L25.6134 29.139L35.7429 19.0096C35.9147 18.8379 36 18.6401 36 18.4171C36 18.1934 35.9142 17.9957 35.7429 17.824L34.4541 16.5354C34.2824 16.3637 34.0846 16.2784 33.8613 16.2784C33.6378 16.2783 33.4401 16.3637 33.2683 16.5354Z" fill="#21364D"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="white"/><path d="M26.7317 43.4646L38.7422 31.4533C38.914 31.2817 39 31.0843 39 30.861C39 30.6376 38.914 30.4398 38.7422 30.2681L26.7317 18.2578C26.5596 18.0858 26.3622 18 26.1388 18C25.9154 18 25.7177 18.086 25.546 18.2578L24.2577 19.5462C24.0859 19.718 24.0001 19.9157 24.0001 20.139C24.0001 20.3624 24.0859 20.5601 24.2577 20.7319L34.3866 30.861L24.2571 40.9904C24.0853 41.1621 24 41.3599 24 41.5829C24 41.8066 24.0858 42.0043 24.2571 42.176L25.5459 43.4646C25.7176 43.6363 25.9154 43.7216 26.1387 43.7216C26.3622 43.7217 26.5599 43.6363 26.7317 43.4646Z" fill="#21364D"/></svg> `
    });
    $(".special--banner__slider").slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".manufactures__slider").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    if ($(".archive--product__sidebar_filter--price--wrapper").length) {

        $(".archive--product__sidebar_filter--price--range [name=minprice_range]").on("input", () => {
            let minprice = $(".archive--product__sidebar_filter--price--range [name=minprice_range]").val(),
                maxprice = $(".archive--product__sidebar_filter--price--range [name=maxprice_range]").val(),
                maxSumm = $(".archive--product__sidebar_filter--price--range [name=minprice_range]").attr("max");
            if (+minprice > +maxprice) {
                $(".archive--product__sidebar_filter--price--range [name=minprice_range]").val(maxprice);
            }
            $(".archive--product__sidebar_filter--price--wrapper input[name=minprice_input]").val($(".archive--product__sidebar_filter--price--range [name=minprice_range]").val());
            $(".archive--product__sidebar_filter--price--range").css({"background":`linear-gradient(to right, #eaeaea ${minprice * 100 / maxSumm}%, var(--color-1) ${minprice * 100 / maxSumm}%, var(--color-1) ${maxprice * 100 / maxSumm}%, #eaeaea ${maxprice * 100 / maxSumm}%)`});
        });

        $(".archive--product__sidebar_filter--price--range [name=maxprice_range]").on("input", () => {
            let minprice = $(".archive--product__sidebar_filter--price--range [name=minprice_range]").val(),
                maxprice = $(".archive--product__sidebar_filter--price--range [name=maxprice_range]").val(),
                maxSumm = $(".archive--product__sidebar_filter--price--range [name=minprice_range]").attr("max");
            if (+maxprice < +minprice) {
                $(".archive--product__sidebar_filter--price--range [name=maxprice_range]").val(minprice);
            }
            $(".archive--product__sidebar_filter--price--wrapper input[name=maxprice_input]").val($(".archive--product__sidebar_filter--price--range [name=maxprice_range]").val());
            $(".archive--product__sidebar_filter--price--range").css({"background":`linear-gradient(to right, #eaeaea ${minprice * 100 / maxSumm}%, var(--color-1) ${minprice * 100 / maxSumm}%, var(--color-1) ${maxprice * 100 / maxSumm}%, #eaeaea ${maxprice * 100 / maxSumm}%)`});
        });
    }


    $(".single--item__thumb").slick({
        infinite: true,
        slidesToShow: 1,
        fade: true,
        swipe: false,
        arrows: false
    });
    $(".single--item__gallery").slick({
        infinite: true,
        slidesToShow: 4,
        focusOnSelect: true,
        asNavFor: '.single--item__thumb',
        prevArrow: `<svg class="slick-arrow slick-prev" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="white"/><path d="M33.2683 16.5354L21.2578 28.5467C21.086 28.7183 21 28.9157 21 29.139C21 29.3624 21.086 29.5602 21.2578 29.7319L33.2683 41.7422C33.4404 41.9142 33.6378 42 33.8612 42C34.0846 42 34.2823 41.914 34.454 41.7422L35.7423 40.4538C35.9141 40.282 35.9999 40.0843 35.9999 39.861C35.9999 39.6376 35.9141 39.4399 35.7423 39.2681L25.6134 29.139L35.7429 19.0096C35.9147 18.8379 36 18.6401 36 18.4171C36 18.1934 35.9142 17.9957 35.7429 17.824L34.4541 16.5354C34.2824 16.3637 34.0846 16.2784 33.8613 16.2784C33.6378 16.2783 33.4401 16.3637 33.2683 16.5354Z" fill="#21364D"/></svg>`,
        nextArrow: `<svg class="slick-arrow slick-next" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="white"/><path d="M26.7317 43.4646L38.7422 31.4533C38.914 31.2817 39 31.0843 39 30.861C39 30.6376 38.914 30.4398 38.7422 30.2681L26.7317 18.2578C26.5596 18.0858 26.3622 18 26.1388 18C25.9154 18 25.7177 18.086 25.546 18.2578L24.2577 19.5462C24.0859 19.718 24.0001 19.9157 24.0001 20.139C24.0001 20.3624 24.0859 20.5601 24.2577 20.7319L34.3866 30.861L24.2571 40.9904C24.0853 41.1621 24 41.3599 24 41.5829C24 41.8066 24.0858 42.0043 24.2571 42.176L25.5459 43.4646C25.7176 43.6363 25.9154 43.7216 26.1387 43.7216C26.3622 43.7217 26.5599 43.6363 26.7317 43.4646Z" fill="#21364D"/></svg> `,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".single--item__tab").each((index, item)=>{
        $(item).on("click",()=>{
            $('.single--item__tab.active').removeClass("active");
            $(".single--item__panel.active").removeClass("active");
            $(item).addClass("active");
            $(".single--item__panel").eq(index).addClass("active");
            return false;
        })
    });

    $(".we--equipment__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $("#menuBtn").on("click",()=>{
        $("#menuBtn").toggleClass("active");
        $(".header__nav").toggleClass("active");
    });
});