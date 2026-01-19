$(document).ready(() => {
    $(document.body).css({ "--scrollTop": $(document).scrollTop() + "px" });
    $(document).on("scroll", () => {
        $(document.body).css({ "--scrollTop": $(document).scrollTop() + "px" });
        if($(document).scrollTop() > 10){
            $("#arrowTop").addClass("show");
        }else{
            $("#arrowTop").removeClass("show");
        }
    });
    $("#arrowTop").on("click",()=>{
        $(document).scrollTop(0)
    });
    $(".showmodal").each((index, item)=>{
        $(item).on('click',()=>{
            $($(item).attr("href")).addClass("show");
            $($(item).attr("href")).addClass("active");
            $("html").css({"overflow":"hidden"});
            return false;
        });
    });
    $(".modalwrapper").each((index, item)=>{
        $(item).on("click",(e)=>{
            if(e.target.classList.contains("modalwrapper")){
                $("html").css({"overflow":"auto"});
                $(item).removeClass("show");
            }
        });
    });
    $(".modalwrapper__close").each((index, item)=>{
        $(item).on('click',()=>{
            $(".modalwrapper.show").each((i, k)=>{
                $("html").css({"overflow":"auto"});
                $(k).removeClass("show");
            });
        });
    });
    $(".single--prod__showdesc a").on('click',()=>{
        $(".single--prod__desc").toggleClass("show");
        if($(".single--prod__desc").hasClass("show")){
            $(".single--prod__showdesc a").html("Скрыть полное описание");
        }else{
            $(".single--prod__showdesc a").html("Показать полное описание");
        }
    });
    $(".single--prod__counter_btn.minus").on('click',()=>{
        if($(".single--prod__counter_input").val() > 0){
            $(".single--prod__counter_input").val( $(".single--prod__counter_input").val() - 1);
        }
    });
    $(".single--prod__counter_btn.pluse").on('click',()=>{
        $(".single--prod__counter_input").val( +$(".single--prod__counter_input").val() + +1);
    });
    $(".single--prod__counter_input").on('input',()=>{
        if($(".single--prod__counter_input").val() < 0 || $(".single--prod__counter_input").val() == ""){
            $(".single--prod__counter_input").val(0);
        }
    });
    $(".single--prod__tabs_tab").each((index, item)=>{
        $(item).on('click',()=>{
            $(".single--prod__tabs_tab.active").removeClass("active");
            $(item).addClass("active");
            $(".single--prod__tabs_info.active").removeClass('active');
            $(".single--prod__tabs_info" + $(item).attr("href")).addClass('active');
            return false;
        });
    });
    $("#mobileMenu").on("click",()=>{
        // Remove active
        $("#mobileCallback").removeClass("active");
        $("#mobileOrder").removeClass("active");
        $(".mobilemenu__callback").removeClass("active");
        $(".modalwrapper#ordercall").removeClass("active");

        $("#mobileMenu").toggleClass("active");
        $(".mobilemenu__nav").toggleClass("active");
        return false;
    });
    $("#mobileCallback").on("click",()=>{
        // Remove active
        $("#mobileMenu").removeClass("active");
        $(".mobilemenu__nav").removeClass("active");
        $("#mobileOrder").removeClass("active");
        $(".modalwrapper#ordercall").removeClass("active");

        $("#mobileCallback").toggleClass("active");
        $(".mobilemenu__callback").toggleClass("active");
        return false;
    });
    $(".mobilemenu__callback_close").on("click",()=>{
        $("#mobileCallback").removeClass("active");
        $(".mobilemenu__callback").removeClass("active");
        return false;
    });
    $("#mobileOrder").on("click",()=>{
        // Remove active
        $("#mobileMenu").removeClass("active");
        $(".mobilemenu__nav").removeClass("active");
        $("#mobileCallback").removeClass("active");
        $(".mobilemenu__callback").removeClass("active");
        $(".modalwrapper#ordercall").removeClass("active");


        $("#mobileOrder").toggleClass("active");
        $(".modalwrapper#ordercall").toggleClass("active");
        return false;
    });
    $(".modalwrapper__close").on('click',()=>{
        $("#mobileOrder").removeClass("active");
        $(".modalwrapper#ordercall").removeClass("active");
    });
    $(".breadcrumbs__filters").on("click",()=>{
        $(".archive--prod__sidebar").toggleClass("active");
        return false;
    });
    $(".archive--prod__sidebar_close").on("click",()=>{
        $(".archive--prod__sidebar").removeClass("active");
        return false;
    });
    $(".mainbanner__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: 0,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $(".popular--items__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<svg width="36" height="36" class="slick-prev slick-arrow" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#FDB837"/><path d="M24.6875 18.1172L19.8906 13.3047C19.8073 13.2318 19.7109 13.1953 19.6016 13.1953C19.4922 13.1953 19.3958 13.2318 19.3125 13.3047C19.2396 13.388 19.2031 13.4844 19.2031 13.5938C19.2031 13.7031 19.2396 13.7995 19.3125 13.8828L23.4375 17.9922H10.4062C10.2917 17.9922 10.1953 18.0312 10.1172 18.1094C10.0391 18.1875 10 18.2839 10 18.3984C10 18.5026 10.0391 18.5938 10.1172 18.6719C10.1953 18.75 10.2917 18.7891 10.4062 18.7891H23.4375L19.3281 22.9141C19.2448 22.987 19.2031 23.0807 19.2031 23.1953C19.2031 23.3099 19.2448 23.4036 19.3281 23.4766C19.3594 23.5182 19.401 23.5495 19.4531 23.5703C19.5052 23.5911 19.5573 23.6016 19.6094 23.6016C19.6615 23.6016 19.7109 23.5911 19.7578 23.5703C19.8047 23.5495 19.849 23.5182 19.8906 23.4766L24.6875 18.6797C24.7604 18.5964 24.7969 18.5 24.7969 18.3906C24.7969 18.2812 24.7604 18.1901 24.6875 18.1172Z" fill="#202020"/></svg>',
        nextArrow: '<svg width="36" height="36" class="slick-next slick-arrow" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#FDB837"/><path d="M24.6875 18.1172L19.8906 13.3047C19.8073 13.2318 19.7109 13.1953 19.6016 13.1953C19.4922 13.1953 19.3958 13.2318 19.3125 13.3047C19.2396 13.388 19.2031 13.4844 19.2031 13.5938C19.2031 13.7031 19.2396 13.7995 19.3125 13.8828L23.4375 17.9922H10.4062C10.2917 17.9922 10.1953 18.0312 10.1172 18.1094C10.0391 18.1875 10 18.2839 10 18.3984C10 18.5026 10.0391 18.5938 10.1172 18.6719C10.1953 18.75 10.2917 18.7891 10.4062 18.7891H23.4375L19.3281 22.9141C19.2448 22.987 19.2031 23.0807 19.2031 23.1953C19.2031 23.3099 19.2448 23.4036 19.3281 23.4766C19.3594 23.5182 19.401 23.5495 19.4531 23.5703C19.5052 23.5911 19.5573 23.6016 19.6094 23.6016C19.6615 23.6016 19.7109 23.5911 19.7578 23.5703C19.8047 23.5495 19.849 23.5182 19.8906 23.4766L24.6875 18.6797C24.7604 18.5964 24.7969 18.5 24.7969 18.3906C24.7969 18.2812 24.7604 18.1901 24.6875 18.1172Z" fill="#202020"/></svg>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
        ]
    })
    $(".single--prod__gallery").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single--prod__thumb--slider',
        arrows: true,
        prevArrow: '<svg width="36" height="36" class="slick-prev slick-arrow" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#FDB837"/><path d="M24.6875 18.1172L19.8906 13.3047C19.8073 13.2318 19.7109 13.1953 19.6016 13.1953C19.4922 13.1953 19.3958 13.2318 19.3125 13.3047C19.2396 13.388 19.2031 13.4844 19.2031 13.5938C19.2031 13.7031 19.2396 13.7995 19.3125 13.8828L23.4375 17.9922H10.4062C10.2917 17.9922 10.1953 18.0312 10.1172 18.1094C10.0391 18.1875 10 18.2839 10 18.3984C10 18.5026 10.0391 18.5938 10.1172 18.6719C10.1953 18.75 10.2917 18.7891 10.4062 18.7891H23.4375L19.3281 22.9141C19.2448 22.987 19.2031 23.0807 19.2031 23.1953C19.2031 23.3099 19.2448 23.4036 19.3281 23.4766C19.3594 23.5182 19.401 23.5495 19.4531 23.5703C19.5052 23.5911 19.5573 23.6016 19.6094 23.6016C19.6615 23.6016 19.7109 23.5911 19.7578 23.5703C19.8047 23.5495 19.849 23.5182 19.8906 23.4766L24.6875 18.6797C24.7604 18.5964 24.7969 18.5 24.7969 18.3906C24.7969 18.2812 24.7604 18.1901 24.6875 18.1172Z" fill="#202020"/></svg>',
        nextArrow: '<svg width="36" height="36" class="slick-next slick-arrow" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#FDB837"/><path d="M24.6875 18.1172L19.8906 13.3047C19.8073 13.2318 19.7109 13.1953 19.6016 13.1953C19.4922 13.1953 19.3958 13.2318 19.3125 13.3047C19.2396 13.388 19.2031 13.4844 19.2031 13.5938C19.2031 13.7031 19.2396 13.7995 19.3125 13.8828L23.4375 17.9922H10.4062C10.2917 17.9922 10.1953 18.0312 10.1172 18.1094C10.0391 18.1875 10 18.2839 10 18.3984C10 18.5026 10.0391 18.5938 10.1172 18.6719C10.1953 18.75 10.2917 18.7891 10.4062 18.7891H23.4375L19.3281 22.9141C19.2448 22.987 19.2031 23.0807 19.2031 23.1953C19.2031 23.3099 19.2448 23.4036 19.3281 23.4766C19.3594 23.5182 19.401 23.5495 19.4531 23.5703C19.5052 23.5911 19.5573 23.6016 19.6094 23.6016C19.6615 23.6016 19.7109 23.5911 19.7578 23.5703C19.8047 23.5495 19.849 23.5182 19.8906 23.4766L24.6875 18.6797C24.7604 18.5964 24.7969 18.5 24.7969 18.3906C24.7969 18.2812 24.7604 18.1901 24.6875 18.1172Z" fill="#202020"/></svg>'
    });
    $(".single--prod__thumb--slider").slick({
        infinite: true,
        slidesToShow: 1,
        asNavFor: '.single--prod__gallery',
        fade: true,
        slidesToScroll: 1,
        arrows: false
    })

    $(".last--news__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".last--news__top .slick-prev"),
        nextArrow: $(".last--news__top .slick-next"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              }
        ]
    });

    $(".advantages__grid").slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
        ]
    });
});

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')