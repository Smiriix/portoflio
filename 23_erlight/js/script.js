$(document).ready(() => {
    if ($(this).scrollTop() > 100) {
        $("header").css({ "background": "rgba(27, 43, 50, 0.6)" });
        $(".header__top").css({ "marginBottom": "0px", "maxHeight": "0px" });
        $(".header__nav li>ul").css({ "background": "rgba(27, 43, 50, 0.6)" });
    }
    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $("header").css({ "background": "rgba(27, 43, 50, 0.6)" });
            $(".header__top").css({ "marginBottom": "0px", "maxHeight": "0px" });
            $(".header__nav li>ul").css({ "background": "rgba(27, 43, 50, 0.6)" });
        } else {
            $("header").css({ "background": "rgba(33, 37, 42, 0.05)" });
            $(".header__nav li>ul").css({ "background": "rgba(33, 37, 42, 0.05)" });
            $(".header__top").css({ "marginBottom": "30px", "maxHeight": "500px" })
        }
    });

    $('.garantSlider').slick({
        slidesToShow: 3,
        prevArrow: '<svg class="arrow-prev" width="21" height="50" viewBox="0 0 21 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1982 1L1.99997 24.9871L19.1982 48.9741" stroke="#F2403E" stroke-width="2"/></svg>',
        nextArrow: '<svg class="arrow-next" width="21" height="50" viewBox="0 0 21 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1982 1L1.99997 24.9871L19.1982 48.9741" stroke="#F2403E" stroke-width="2"/></svg>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
    $("#menuBtn").click(()=>{
        $("#menuBtn").toggleClass("active");
        $(".mobilemenu").toggleClass("active");
        if(!document.querySelector(".mobilemenu").classList.contains("active")){
            jQuery.each($(".mobilemenu input[type=checkbox]"), (index, value)=>{
                value.checked = false;
            });
        }
    });
    let submenu = document.querySelectorAll(".has-sub");
    var check = true;
    submenu.forEach(item => {
        item.onclick = () => {
            submenu.forEach(k => {
                k.classList.remove("show");
            });
            item.classList.add("show");
        }
        item.querySelector("a").onclick = () => {
            return false;
        }
        item.onmouseleave = () => {
            check = true;
            console.log("1");
        }
        item.onmouseenter = () => {
            check = false;
            console.log("2");
        }
    });
    document.onclick = () => {
        if (check == true) {
            document.querySelector(".has-sub.show").classList.remove("show");
        }
    }
    if (document.querySelectorAll(".about__tabsandtext").length > 0) {
        let tabs = document.querySelectorAll(".about__tab");
        tabs.forEach(item => {
            item.onclick = () => {
                tabs.forEach(k => {
                    k.classList.remove("active");
                });
                item.classList.add("active");
                return false;
            }
        });
    }
});