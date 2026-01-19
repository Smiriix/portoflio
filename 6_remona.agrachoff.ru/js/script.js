$(document).ready(() => {
    $("#job-slider").owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        items: 4.15,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2.15
            },
            991: {
                items: 4.15
            },
            2560: {
                items: 6.15
            }
        }
    });

    lightbox.option({
        showImageNumberLabel: false,
        disableScrolling: true
    });
});

let SlideIndex = 1;
let pluse = (e) => {
    SlideIndex += e;
    showSlide();
}
let showSlide = () => {
    let slides = document.querySelector(".slider").querySelectorAll(".slide");
    if (SlideIndex > slides.length) {
        SlideIndex = 1
    }
    if (SlideIndex < 1) {
        SlideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[SlideIndex - 1].classList.add('active');
}
showSlide();

let navbar = document.querySelector("nav.navbar"),
    links = navbar.querySelectorAll("a.nav-link");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        if(window.innerWidth <= 991){
            navbar.querySelector("button.navbar-toggler").click();
        }
    }
}

document.onscroll = () => {
    scrollH();
}
let scrollH = () => {
    if(document.scrollingElement.scrollTop >= 100){
        document.querySelector(".header").classList.add('active');
    }else{
        document.querySelector(".header").classList.remove('active');
    }
}
scrollH();

let modalsBtns = document.querySelectorAll("[showmodal]");
for(let i=0;i<modalsBtns.length;i++){
    modalsBtns[i].onclick = () => {
        if(modalsBtns[i].getAttribute("href") == "#modalform"){
            modalsBtns[i].parentElement.querySelector(".close_modal").click();
        }
        document.querySelector(modalsBtns[i].getAttribute("href")).style.top = "0";
        document.querySelector(modalsBtns[i].getAttribute("href")).classList.add("active");
        document.scrollingElement.style.overflow = 'hidden';
        return false;
    }
}
let modals = document.querySelectorAll(".modal");
for(let i=0;i<modals.length;i++){
    modals[i].onclick = (e) => {
        if(e.target == modals[i] || e.target == modals[i].querySelector(".close_modal") || e.target == modals[i].querySelector(".close_modal").querySelector("span")){
            modals[i].classList.remove("active");
            document.scrollingElement.style.overflow = 'auto';
            setTimeout(()=>{modals[i].style.top = '-100vh';}, 300);
        }
    }
}