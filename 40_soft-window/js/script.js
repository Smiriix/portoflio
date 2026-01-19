$(document).ready(()=>{
    $(window).on('load resize', function() {
        if ($(window).width() <= 767) {
            $(".services__grid:not(.slick-initialised)").slick({
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            prevArrow: `<svg class='slick-prev slick-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="white"/><path d="M22.1789 11.0236L14.1719 19.0311C14.0574 19.1455 14 19.2771 14 19.426C14 19.5749 14.0574 19.7068 14.1719 19.8212L22.1789 27.8281C22.2936 27.9428 22.4252 28 22.5742 28C22.723 28 22.8548 27.9426 22.9693 27.8281L23.8282 26.9692C23.9427 26.8547 23.9999 26.7229 23.9999 26.574C23.9999 26.4251 23.9427 26.2933 23.8282 26.1788L17.0756 19.426L23.8286 12.6731C23.9431 12.5586 24 12.4267 24 12.2781C24 12.1289 23.9428 11.9971 23.8286 11.8827L22.9694 11.0236C22.8549 10.9092 22.723 10.8523 22.5742 10.8523C22.4252 10.8522 22.2934 10.9091 22.1789 11.0236Z" fill="#395EA6"/></svg>`,
                            nextArrow: `<svg class='slick-next slick-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="white"/><path d="M17.8211 27.9764L25.8281 19.9689C25.9426 19.8545 26 19.7229 26 19.574C26 19.4251 25.9426 19.2932 25.8281 19.1788L17.8211 11.1719C17.7064 11.0572 17.5748 11 17.4258 11C17.277 11 17.1452 11.0574 17.0307 11.1719L16.1718 12.0308C16.0573 12.1453 16.0001 12.2771 16.0001 12.426C16.0001 12.5749 16.0573 12.7067 16.1718 12.8212L22.9244 19.574L16.1714 26.3269C16.0569 26.4414 16 26.5733 16 26.7219C16 26.8711 16.0572 27.0029 16.1714 27.1173L17.0306 27.9764C17.1451 28.0908 17.277 28.1477 17.4258 28.1477C17.5748 28.1478 17.7066 28.0909 17.8211 27.9764Z" fill="#395EA6"/></svg>`,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            });
            $(".portfolio__grid:not(.slick-initialised)").slick({
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            prevArrow: `<svg class='slick-prev slick-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="white"/><path d="M22.1789 11.0236L14.1719 19.0311C14.0574 19.1455 14 19.2771 14 19.426C14 19.5749 14.0574 19.7068 14.1719 19.8212L22.1789 27.8281C22.2936 27.9428 22.4252 28 22.5742 28C22.723 28 22.8548 27.9426 22.9693 27.8281L23.8282 26.9692C23.9427 26.8547 23.9999 26.7229 23.9999 26.574C23.9999 26.4251 23.9427 26.2933 23.8282 26.1788L17.0756 19.426L23.8286 12.6731C23.9431 12.5586 24 12.4267 24 12.2781C24 12.1289 23.9428 11.9971 23.8286 11.8827L22.9694 11.0236C22.8549 10.9092 22.723 10.8523 22.5742 10.8523C22.4252 10.8522 22.2934 10.9091 22.1789 11.0236Z" fill="#395EA6"/></svg>`,
                            nextArrow: `<svg class='slick-next slick-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="white"/><path d="M17.8211 27.9764L25.8281 19.9689C25.9426 19.8545 26 19.7229 26 19.574C26 19.4251 25.9426 19.2932 25.8281 19.1788L17.8211 11.1719C17.7064 11.0572 17.5748 11 17.4258 11C17.277 11 17.1452 11.0574 17.0307 11.1719L16.1718 12.0308C16.0573 12.1453 16.0001 12.2771 16.0001 12.426C16.0001 12.5749 16.0573 12.7067 16.1718 12.8212L22.9244 19.574L16.1714 26.3269C16.0569 26.4414 16 26.5733 16 26.7219C16 26.8711 16.0572 27.0029 16.1714 27.1173L17.0306 27.9764C17.1451 28.0908 17.277 28.1477 17.4258 28.1477C17.5748 28.1478 17.7066 28.0909 17.8211 27.9764Z" fill="#395EA6"/></svg>`,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            });
        }else{
            $(".services__grid").slick("unslick");
            $(".portfolio__grid").slick("unslick");
        }
    });
    $("#menuBTN").on("click",()=>{
        $("#menuBTN").toggleClass("active");
        $(".header__mobile--menu").toggleClass("active");
        $(".darkscreen").toggleClass('active');
        $(".modalwindow").removeClass("active");
        if($("#menuBTN").hasClass("active")){
            $("body").css({"overflow":"hidden"})
        }else{
            $("body").css({"overflow":"auto"})
        }
    });
    $(".showmodal").on("click",()=>{
        // Remove active class
        $("#menuBTN").removeClass("active");
        $(".header__mobile--menu").removeClass("active");
        $(".darkscreen").removeClass('active');

        $(".modalwindow").addClass("active");
        $("body").css({"overflow":"hidden"})

        return false;
    });

    $(".modalwindow__close").on("click",()=>{
        $(".modalwindow").removeClass("active");
        $("body").css({"overflow":"auto"})
    })
});