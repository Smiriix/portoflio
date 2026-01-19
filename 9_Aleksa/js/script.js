$(document).ready(() => {
    $("#achievSlider").owlCarousel({
        loop: 1,
        margin: 55,
        nav: 0,
        dots: 0,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
    $("#partnersSlider").owlCarousel({
        loop: 1,
        margin: 50,
        nav: 0,
        dots: 0,
        responsive: {
            0: {
                items: 3
            },
            991: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });
    lightbox.option({
        'albumLabel': false,
        'disableScrolling': true
    });

});
let scrolling = () => {
    if (document.scrollingElement.scrollTop > 100) {
        document.querySelector(".header").classList.add('scroll');
    } else {
        document.querySelector(".header").classList.remove('scroll');
    }
}
document.onscroll = () => {
    scrolling();
}
scrolling();

let burgerbtn = document.querySelector("#burgermenu"),
    modallayer = document.querySelector(".modallayer"),
    modalmenu = document.querySelector("#modalmenu");

burgerbtn.onclick = () => {
    burgerbtn.classList.toggle("active");
    modalmenu.classList.toggle("showmodal");
    if (modalmenu.classList.contains("showmodal")) {
        modallayer.style.top = 0;
        modallayer.style.opacity = 1;
        document.scrollingElement.style.overflow = 'hidden';
    } else {
        modallayer.style.opacity = 0;
        setTimeout(() => {
            modallayer.style.top = '-100vh';
            document.scrollingElement.style.overflow = 'auto';
        }, 300);
    }
}
modallayer.onclick = () => {
    burgerbtn.classList.remove("active");
    modalmenu.classList.remove("showmodal");
    document.scrollingElement.style.overflow = 'auto';
    modallayer.style.opacity = 0;
    setTimeout(() => {
        modallayer.style.top = '-100vh';
    }, 300);
}