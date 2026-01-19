$(document).ready(() => {
    $(".faq--accordion__item_caption").each((index, item)=>{
        $(item).on('click',()=>{
            $(item).parent().toggleClass("active");
        });
    });
    $("#menuBtn").on("click",()=>{
        $(".header__nav.mobile").toggleClass("active");
    });
    $(".arch-visual__slider").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" transform="rotate(-180 15 15)" fill="white"/><path d="M16 21L10.2524 15.2585L16 9.51692" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" fill="white"/><path d="M14 9L19.7476 14.7415L14 20.4831" stroke="#3D71AF" stroke-width="0.957931"/></svg>'
    });
    $(".personal__slider").slick({
        infinite: true,
        slidesToShow: 4,
        dots: true,
        arrows: true,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" transform="rotate(-180 15 15)" fill="white"/><path d="M16 21L10.2524 15.2585L16 9.51692" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" fill="white"/><path d="M14 9L19.7476 14.7415L14 20.4831" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".feedback__slider").slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" transform="rotate(-180 15 15)" fill="white"/><path d="M16 21L10.2524 15.2585L16 9.51692" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" fill="white"/><path d="M14 9L19.7476 14.7415L14 20.4831" stroke="#3D71AF" stroke-width="0.957931"/></svg>'
    })
    $(".single--service__more_slider").slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        centerMode: true,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" transform="rotate(-180 15 15)" fill="white"/><path d="M16 21L10.2524 15.2585L16 9.51692" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="15" fill="white"/><path d="M14 9L19.7476 14.7415L14 20.4831" stroke="#3D71AF" stroke-width="0.957931"/></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});