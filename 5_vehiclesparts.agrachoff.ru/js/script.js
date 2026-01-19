$(document).ready(() => {
    if (document.querySelectorAll(".owl-carousel").length > 0) {

        $("#items-sale-slider").owlCarousel({
            items: 3,
            loop: false,
            dots: true,
            nav: true,
            center: true,
            margin: 56,
            navText: ['<svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M0 25.7143L11.25 15L0 4.28571L2.25 0L18 15L2.25 30L0 25.7143Z" fill="#292C30"/>' +
                '</svg>', '<svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M0 25.7143L11.25 15L0 4.28571L2.25 0L18 15L2.25 30L0 25.7143Z" fill="#292C30"/>' +
                '</svg>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                900: {
                    items: 3
                }
            }
        });
        $("#feedbacks").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            navText: ['<img src="assets/img/slider_arrow.svg">',
                        '<img src="assets/img/slider_arrow.svg">'],
            responsive: {
                0: {
                    nav: true
                },
                990: {
                    nav: false
                }
            }
        });

        $("#recommend_slider").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            margin: 30,
            navText: ['<img src="assets/img/slider_arrow.svg">',
                        '<img src="assets/img/slider_arrow.svg">'],
            responsive: {
                0: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1200: {
                    margin: 50,
                    items: 4,
                    nav: false
                }
            }
        });

        if (document.querySelector("#items-sale-slider").querySelectorAll(".owl-dot").length > 0) {
            let dots = document.querySelector("#items-sale-slider").querySelectorAll(".owl-dot");
            for (let i = 0; i < dots.length; i++) {
                dots[i].innerHTML = Number(i + 1).toString().padStart(2, '0');
            }
        }
    }
});

// Slider
let SliderIndex = 1;

let showDot = (e) => {
    SliderIndex = e;
    showSlide();
}
let pluse = (e) => {
    SliderIndex += e;
    showSlide();
}
let showSlide = () => {
    let slides = document.querySelectorAll(".slide");
    let numbers = document.querySelector(".number-slide").querySelectorAll("a");
    if (SliderIndex < 1) {
        SliderIndex = slides.length
    }
    if (SliderIndex > slides.length) {
        SliderIndex = 1
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        numbers[i].classList.remove('active');
    }
    slides[SliderIndex - 1].classList.add("active");
    numbers[SliderIndex - 1].classList.add('active');
}

// ScrollHeader
if (document.querySelectorAll(".header.index").length > 0) {
    document.onscroll = () => {
        headerScroll();
    }
    let headerScroll = () => {
        if (document.scrollingElement.scrollTop >= 100) {
            document.querySelector(".header.index").parentElement.classList.add("scroll");
        } else {
            document.querySelector(".header.index").parentElement.classList.remove("scroll");
        }
    }
    headerScroll();
}

document.querySelector("#burger").onclick = () => {
    document.querySelector("#menu_dropdown").classList.toggle('active');
}

// ModalMenu
let showModal = () => {
    document.querySelector("#modal").classList.add("active");
    document.scrollingElement.style.overflow = 'hidden';
}
let hideModal = () => {
    document.querySelector("#modal").classList.remove("active");
    document.scrollingElement.style.overflow = 'auto';
}

if (document.querySelectorAll("#linkourbtn").length > 0) {
    let linkourbtn = document.querySelectorAll("#linkourbtn");
    linkourbtn.onclick = () => {
        document.querySelector("#linkour").style.display = 'flex';
    }
}

let showSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("active");
}