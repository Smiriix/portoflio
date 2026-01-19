$(document).ready(() => {
    $(".item-slider").owlCarousel({
        items: 5.7,
        margin: 30,
        loop: 1,
        nav: 0,
        dots: 0,
        responsive: {
            0: {
                items: 1.7
            },
            991: {
                items: 3.7
            },
            1200: {
                items: 5.7
            }
        }
    });
    $("#feedback-carousel").owlCarousel({
        items: 3,
        loop: 1,
        nav: 0,
        dots: 1,
        center: 1,
        responsive: {
            0: {
                items: 1.2,
                margin: 15
            },
            991: {
                items: 3,
                margin: 15
            },
            1200: {
                margin: 60
            }
        }
    });
});

let ildkl = () => {
    document.querySelectorAll(".itemss").forEach(item => {
        item.style.width = window.innerWidth - document.querySelector(".itemss").getBoundingClientRect().left - 32 + "px";
    });
}
window.onresize = ildkl;
ildkl();


window.onscroll = () => {
    if (document.scrollingElement.scrollTop > 300) {
        document.querySelector(".scrolltotop").classList.add("show");
    } else {
        document.querySelector(".scrolltotop").classList.remove("show");
    }
}
document.querySelector(".scrolltotop").onclick = () => {
    document.scrollingElement.scrollTop = 0;
}

document.querySelectorAll(".sm-accardion").forEach(item => {
    item.querySelector(".accardion").onclick = () => {
        item.classList.toggle('show');
    }
});

ymaps.ready(() => {
    let myMap = new ymaps.Map('map', {
        center: [56.971987, 40.861083],
        zoom: 17,
        controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([56.971987, 40.861083], {}));
});

document.querySelectorAll("[showmodal]").forEach(item => {
    item.onclick = () => {
        document.querySelector("#modal").style.top = '0';
        document.querySelector("#modal").style.opacity = '1';
        document.querySelector(item.getAttribute("href")).classList.add('show');
        document.scrollingElement.style.overflow = 'hidden';
        void (0);
    }
});

document.querySelector("#modal").addEventListener("click", (e) => {
    if (e.target == document.querySelector("#modal") || e.target == document.querySelector("#close_modal")) {
        document.querySelector("#modal").style.opacity = '0';
        document.scrollingElement.style.overflow = 'auto';
        setTimeout(() => {
            document.querySelector("#modal").style.top = '-100vh';
            document.querySelector("#modal").querySelector(".show").classList.remove('show');
        }, 300);
    }
});

document.querySelector("#burger").onclick = () => {
    document.querySelector("#modalmenu").style.top = "20px";
    document.querySelector("#modalmenu").style.opacity = 1;
}
document.querySelector("#close_menu").onclick = () => {
    document.querySelector("#modalmenu").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("#modalmenu").style.top = "-100vh";
    }, 300);
}

document.querySelectorAll("[catalog]").forEach((item, index) => {
    item.onclick = () => {
        document.querySelector("#catalog").querySelectorAll(".nav-link")[index].click();
        document.querySelector("#modal").style.opacity = '0';
        document.scrollingElement.style.overflow = 'auto';
        setTimeout(() => {
            document.querySelector("#modal").style.top = '-100vh';
            document.querySelector(".show").classList.remove('show');
        }, 300);
    }
});

document.querySelector("#modalmenu").querySelector("nav").querySelectorAll("a").forEach(item => {
    item.onclick = () => {
        close_menu.click();
    }
})