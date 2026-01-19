$(document).ready(()=>{
    $('#servicesSlider').owlCarousel({
        items: 3,
        loop: 1,
        nav: 1,
        dots: 0,
        margin: 30,
        navText: ['','']
    });
    $('.casesSlider').owlCarousel({
        items: 1,
        loop: 1,
        nav: 1,
        dots: 0,
        margin: 30,
        navText: ['','']
    });
    $('#feedbackslider').owlCarousel({
        items: 1,
        loop: 1,
        nav: 1,
        dots: 1,
        margin: 30,
        navText: ['','']
    });
    $('#partnerSlider').owlCarousel({
        items: 4,
        loop: 1,
        nav: 1,
        dots: 1,
        margin: 30,
        navText: ['',''],
        responsive: {
            0: {
                items: 2.5
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});

document.onscroll = () => {
    showArrowTop();
}
let showArrowTop = () => {
    if(document.scrollingElement.scrollTop >= 100){
        document.querySelector("#arrowtop").classList.add("active");
    }else{
        document.querySelector("#arrowtop").classList.remove("active");
    }
}
showArrowTop();

document.querySelector("#arrowtop").onclick = () => {
    document.scrollingElement.scrollTop = 0;
}


document.querySelectorAll(".showmodal").forEach(item=>{
    item.onclick = () => {
        let modalname = item.getAttribute("href");
        return false;
    }
});

let menuBtn = document.querySelector("#menubtn"),
    mobileMenu = document.querySelector(".mobilemenu");
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("show");
    if(menuBtn.classList.contains("active")){
        document.scrollingElement.style.overflow = 'hidden';
    }else{
        document.scrollingElement.style.overflow = '';
    }
}
window.onresize = () => {
    changeMobileMenu();
}
let changeMobileMenu = () => {
    document.querySelector(".mobilemenu").style.maxHeight = document.scrollingElement.clientHeight - document.querySelector(".header").clientHeight + "px";
}
changeMobileMenu();

document.querySelector(".childs").onclick = () => {
    document.querySelector(".childs").classList.toggle("active");
}