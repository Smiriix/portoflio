$(document).ready(() => {
    if ($("#directionSlider").length > 0) {
        $("#directionSlider").slick({
            adaptiveHeight: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($("#exampleWorks").length > 0) {
        $("#exampleWorks").slick({
            adaptiveHeight: 1,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
    $("#menuBtn").click(() => {
        $("#menuBtn").toggleClass("active");
        $(".header__nav").toggleClass("show");
    });
});