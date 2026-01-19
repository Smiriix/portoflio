$(document).ready(()=>{
    $(".main__banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        adaptiveHeight: true,
        prevArrow: '<svg class="slick-arrow prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="rotate(180 20 20)" stroke="white"/><path d="M20.6343 27.4441L29.7549 17.4358C30.0817 17.1074 30.0817 16.5747 29.7549 16.2463C29.4282 15.9179 28.898 15.9179 28.5713 16.2463L20 25.6512L11.4287 16.2472C11.1019 15.9187 10.5718 15.9187 10.245 16.2472C9.91832 16.5756 9.91832 17.1082 10.245 17.4366L19.3657 27.4449C19.5398 27.62 19.7708 27.695 19.9991 27.6833C20.2284 27.6942 20.4593 27.6192 20.6343 27.4441Z" fill="white"/></svg>',
        nextArrow: '<svg class="slick-arrow next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="rotate(180 20 20)" stroke="white"/><path d="M20.6343 27.4441L29.7549 17.4358C30.0817 17.1074 30.0817 16.5747 29.7549 16.2463C29.4282 15.9179 28.898 15.9179 28.5713 16.2463L20 25.6512L11.4287 16.2472C11.1019 15.9187 10.5718 15.9187 10.245 16.2472C9.91832 16.5756 9.91832 17.1082 10.245 17.4366L19.3657 27.4449C19.5398 27.62 19.7708 27.695 19.9991 27.6833C20.2284 27.6942 20.4593 27.6192 20.6343 27.4441Z" fill="white"/></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });
    $(".special__wrapper_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<svg class="slick-arrow prev" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="rotate(-90 20 20)" stroke="#015FC9"/><path d="M12.5559 20.6343L22.5642 29.7549C22.8926 30.0817 23.4253 30.0817 23.7537 29.7549C24.0821 29.4282 24.0821 28.898 23.7537 28.5713L14.3488 20L23.7528 11.4287C24.0813 11.1019 24.0813 10.5718 23.7528 10.245C23.4244 9.91832 22.8918 9.91832 22.5634 10.245L12.5551 19.3657C12.38 19.5398 12.305 19.7708 12.3167 19.9991C12.3058 20.2284 12.3808 20.4593 12.5559 20.6343Z" fill="#015FC9"/></svg>',
        nextArrow: '<svg class="slick-arrow next" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="rotate(-90 20 20)" stroke="#015FC9"/><path d="M12.5559 20.6343L22.5642 29.7549C22.8926 30.0817 23.4253 30.0817 23.7537 29.7549C24.0821 29.4282 24.0821 28.898 23.7537 28.5713L14.3488 20L23.7528 11.4287C24.0813 11.1019 24.0813 10.5718 23.7528 10.245C23.4244 9.91832 22.8918 9.91832 22.5634 10.245L12.5551 19.3657C12.38 19.5398 12.305 19.7708 12.3167 19.9991C12.3058 20.2284 12.3808 20.4593 12.5559 20.6343Z" fill="#015FC9"/></svg>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $("#menuBtn").on("click", ()=>{
        $("#menuBtn").toggleClass("active");
        $(".mobile__menu").toggleClass("active");
    });
    $(document).on("scroll",()=>{
        $("#menuBtn").removeClass("active");
        $(".mobile__menu").removeClass("active");
    });
});




document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')