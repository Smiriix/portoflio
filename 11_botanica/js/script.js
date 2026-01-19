$(document).ready(() => {
    document.querySelector("#menu-toggle").onclick = () => {
        document.querySelector("#menu-toggle").classList.toggle("active");
        document.querySelector("#menufix").classList.toggle('active');
    }

    $("#servicesSlider").owlCarousel({
        items: 5,
        margin: 40,
        loop: 0,
        center: 0,
        loop: 1,
        dots: 0,
        nav: 1,
        navText: [],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 3
            },
            1200: {
                loop: 0,
                items: 5
            }
        }
    });

    $("#sliderClients").owlCarousel({
        items: 5,
        margin: 30,
        loop: 1,
        center: 1,
        dots: 0,
        nav: 1,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 3
            },
            1200: {
                loop: 0,
                items: 5
            }
        }
    });

    $("#sliderLetters").owlCarousel({
        items: 1,
        margin: 40,
        loop: 1,
        center: 1,
        dots: 0,
        nav: 1,
        navText: ['', '']
    });
    $(".serviceinSlider").owlCarousel({
        items: 1,
        margin: 40,
        loop: 1,
        center: 1,
        dots: 0,
        nav: 1,
        navText: ['', '']
    });
});

if (document.querySelectorAll(".accardion").length > 0) {
    document.querySelectorAll(".showaccardion").forEach((item, index) => {
        item.onclick = () => {
            // document.querySelectorAll(".accardion").forEach(k => {
            //     k.classList.remove("show");
            // });
            document.querySelectorAll(".accardion")[index].classList.toggle("show");
        }
    });
}

if (document.querySelectorAll(".showmodal").length > 0) {
    document.querySelectorAll(".showmodal").forEach(item => {
        item.onclick = () => {
            let modalid = item.getAttribute("href");
            document.querySelector(modalid).classList.add("show");
            document.querySelector(modalid).style.top = "0";
            document.scrollingElement.style.overflow = 'hidden';
            return false;
        }
    });
    document.querySelectorAll(".modalwindow").forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target == item || e.target == item.querySelector(".closemodal")) {
                item.classList.remove('show');
                document.scrollingElement.style.overflow = 'auto';
                setTimeout(() => {
                    item.style.top = "-100vh";
                }, 300)
            }
        });
    });
}


let quizprev = document.querySelector("#quizform").querySelector(".quiznbtn.prev"),
    quiznext = document.querySelector("#quizform").querySelector(".quiznbtn.next"),
    quizIndex = 1;
let quizShow = () => {
    let quizs = document.querySelector("#quizform").querySelectorAll(".quiz");
    if (quizIndex < 1) { quizIndex = 1 }
    if (quizIndex > quizs.length) { quizIndex = quizs.length }
    document.querySelector("#quizform").querySelector(".count").innerHTML = `${quizIndex}/${quizs.length}`;
    document.querySelector("#quizform").querySelector(".quiz__list").style.transform = `translateX(-${100/quizs.length * (quizIndex - 1)}%)`;
}
quizShow();
let quizPluse = (e) => {
    quizIndex += e;
    quizShow();
}
quizprev.onclick = () => {
    quizPluse(-1);
}
quiznext.onclick = () => {
    quizPluse(1);
}