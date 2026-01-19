let headerScroll = () => {
    if(document.scrollingElement.scrollTop >= 100){
        document.querySelector(".header").style.boxShadow = "0px 0px 10px 1px #00000040";
    }else{
        document.querySelector(".header").style.boxShadow = "0px 0px 10px 1px transparent";
    }
}
document.onscroll = () => {
    headerScroll();
}
headerScroll();

$(document).ready(()=>{
    $("#license-slider").owlCarousel({
        items: 5,
        loop: true,
        margin: 40,
        nav: true,
        dots: true,
        navText: ['<img src="assets/img/slider_arrow.png">','<img style="transform: scale(-1, 1)" src="assets/img/slider_arrow.png">'],
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 24
            },
            600: {
                items: 3,
                nav: false
            },
            1200: {
                items: 5,
                nav: true
            }
        }
    });
    $("#photo_slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: ['<img src="assets/img/slider_arrow.png">','<img style="transform: scale(-1, 1)" src="assets/img/slider_arrow.png">'],
        responsive: {
            0: {
                items: 2,
                nav: false,
                margin: 24
            },
            900: {
                items: 3,
                nav: false
            }
        }
    });
});

lightbox.option({
    albumLabel: false
});