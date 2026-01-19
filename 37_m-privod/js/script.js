$(document).ready(() => {
    $(".main--slider").slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: true,
        prevArrow: '<svg class="slick-arrow slick-prev" xmlns="http://www.w3.org/2000/svg" width="34" height="62" viewBox="0 0 34 62" fill="none"><path d="M32.6157 1L2 31L32.6157 61" stroke="white" stroke-width="2"/></svg>',
        nextArrow: '<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width="34" height="62" viewBox="0 0 34 62" fill="none"><path d="M1.61572 1L32.2314 31L1.61572 61" stroke="white" stroke-width="2"/></svg>'
    });

    $(".catalog--section__slider").slick({
        slidesToShow: 6,
        infinite: true,
        arrows: true,
        prevArrow: $(".catalog--section .arrow-prev"),
        nextArrow: $(".catalog--section .arrow-next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
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
    $(".recommend__slider").slick({
        slidesToShow: 4,
        infinite: true,
        arrows: true,
        prevArrow: $(".recommend .arrow-prev"),
        nextArrow: $(".recommend .arrow-next"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
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
    $(".producer__slider").slick({
        slidesToShow: 4,
        infinite: true,
        arrows: true,
        prevArrow: $(".producer .arrow-prev"),
        nextArrow: $(".producer .arrow-next"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $(".feedbacks__slider").slick({
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        prevArrow: $(".feedbacks .arrow-prev"),
        nextArrow: $(".feedbacks .arrow-next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })
    $(".single--item__thumb").slick({
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: false,
        fade: true,
        swipe: false
    });
    $(".single--item__gallery").slick({
        slidesToShow: 4,
        infinite: false,
        dots: false,
        arrows: false,
        vertical: true,
        asNavFor: ".single--item__thumb",
        focusOnSelect: true
    });

    $(".catalog--wrapper__category input").on("change", (e) => {
        $(".catalog--wrapper__category input").each((index, item) => {
            if ($(item)[0] != e.target) {
                $(item)[0].checked = false;
            }
        });
    });
    $(".category--wrapper__filter_list--select").on("click", (e) => {
        if(e.target == $(".category--wrapper__filter_list--select")[0]){
            $(".category--wrapper__filter_list--select").toggleClass("active");
        }
    });
    $(".category--wrapper__filter_price--range input[name=pricemin]").on("input", () => {
        let minprice = +$(".category--wrapper__filter_price--range input[name=pricemin]").val(),
            maxprice = +$(".category--wrapper__filter_price--range input[name=pricemax]").val();

        if (minprice >= maxprice) {
            $(".category--wrapper__filter_price--range input[name=pricemin]").val(maxprice);
        }
        changePriceRange();
    });
    $(".category--wrapper__filter_price--range input[name=pricemax]").on("input", () => {
        let minprice = +$(".category--wrapper__filter_price--range input[name=pricemin]").val(),
            maxprice = +$(".category--wrapper__filter_price--range input[name=pricemax]").val();

        if (maxprice <= minprice) {
            $(".category--wrapper__filter_price--range input[name=pricemax]").val(minprice);
        }
        changePriceRange();
    });
    
    changePriceRange = () => {
        let minprice = +$(".category--wrapper__filter_price--range input[name=pricemin]").val(),
            maxprice = +$(".category--wrapper__filter_price--range input[name=pricemax]").val(),
            max = +$(".category--wrapper__filter_price--range input[name=pricemin]").attr("max");
        $(".category--wrapper__filter_price--range").css({"background":`linear-gradient(to right, #cfcfcf ${minprice * 100 / max}%, var(--color-3) ${minprice * 100 / max}%, var(--color-3) ${maxprice * 100 / max}%, #cfcfcf ${maxprice * 100 / max}%)`});
        $(".category--wrapper__filter_list--select span").html(`Цена от ${minprice} ₽ до ${maxprice} ₽`);
    }

    $(".tabs__wrapper a").on("click",(e)=>{
        if($(e.target).attr("href")[0] == "#"){
            $(".tabs__wrapper a.active").removeClass("active");
            $(e.target).addClass("active");
            $(".tabs__panel.active").removeClass("active");
            $(`.tabs__panel${$(e.target).attr("href")}`).addClass("active");
            return false;
        }
    });
    $(".showmodal").each((index, item)=>{
        $(item).on("click",()=>{
            $(`.modalwindow${$(item).attr("href")}`).addClass('show');
            $("body").css({"overflow":"hidden"});
            return false;
        });
    });
    $(".modalwindow__close").on("click",()=>{
        $(".modalwindow").removeClass('show');
        $("body").css({"overflow":"auto"});
        return false;
    });
    $("#menuBtn").on("click",()=>{
        $("#menuBtn").toggleClass("active");
        $(".grey__layer").toggleClass('active');
        if($("#menuBtn").hasClass("active")){
            $("body").css({"overflow":"hidden"});
        }else{
            $("body").css({"overflow":"auto"});
        }
    });
});