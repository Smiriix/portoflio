$(document).ready(() => {
    $('#bannerSlider').owlCarousel({
        items: 1,
        margin: 0,
        dots: 1,
        nav: 1,
        loop: 1,
        navText: ["", ""]
    });
    $('#feedbackSlider').owlCarousel({
        items: 3,
        margin: 30,
        dots: 0,
        nav: 1,
        loop: 1,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    document.onscroll = () => {
        scrollHeader();
    }
    let scrollHeader = () => {
        if (document.scrollingElement.scrollTop > 100) {
            document.querySelector(".header").classList.add("active");
        } else {
            document.querySelector(".header").classList.remove("active");
        }
    }
    scrollHeader();
});

if (document.querySelectorAll(".showmodal").length > 0) {
    document.querySelectorAll(".showmodal").forEach(item => {
        item.onclick = () => {
            let modalName = item.getAttribute("href");
            document.querySelector(`${modalName}`).classList.add("active");
            document.querySelector(`${modalName}`).style.opacity = 1;
            document.querySelector(`${modalName}`).style.top = 0;
            document.scrollingElement.style.overflow = 'hidden';
            return false;
        }
    });
}
if (document.querySelectorAll(".modalwindow").length > 0) {
    document.querySelectorAll(".modalwindow").forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target.className == "closemodal" || e.target == item) {
                item.classList.remove("active");
                item.style.opacity = 0;
                setTimeout(() => {
                    item.style.top = "-100vh";
                    document.scrollingElement.style.overflow = 'auto';
                }, 300);
            }
        });
    });
}

document.querySelector("label.check").querySelector("input").onchange = () => {
    document.querySelector("label.check").classList.toggle("active");
}

// Gallery slider
let slideIndex = 0;

let slidePluse = (e) => {
    slideIndex += e;
    showSlide();
}
let showSlide = () => {
    let miniimgs = document.querySelector(".imgmini_wrapper").querySelectorAll("img");
    miniimgs.forEach(item => {
        item.classList.remove("active");
    });
    if (slideIndex > miniimgs.length - 1) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = miniimgs.length - 1 }
    miniimgs[slideIndex].classList.add("active");
    document.querySelector("#gallery").querySelector(".showimg").src = miniimgs[slideIndex].src;
}

document.querySelector("#gallery").querySelector(".imgmini_wrapper").addEventListener('click', (e) => {
    document.querySelector(".imgmini_wrapper").querySelectorAll("img").forEach((item, index) => {
        if (e.target == item) {
            slideIndex = index;
            showSlide();
        }
    })
});

if (document.querySelector(".services").querySelectorAll(".tab").length > 0) {
    document.querySelector(".services").querySelectorAll(".tab").forEach((item, index) => {
        item.onclick = () => {
            document.querySelector(".services").querySelector(".tab.active").classList.remove("active");
            document.querySelector(".services").querySelector(".panel.active").classList.remove("active");
            document.querySelector(".services").querySelectorAll(".tab")[index].classList.add("active");
            document.querySelector(".services").querySelectorAll(".panel")[index].classList.add("active");
        }
    });
}

document.querySelector(".showmenu").onclick = () => {
    document.querySelector(".showmenu").classList.toggle("active");
    document.querySelector(".mobilemenu").classList.toggle("active");
    if(document.querySelector(".showmenu").classList.contains("active")){
        document.querySelector(".layer").style.top = '0';
        document.querySelector(".layer").style.opacity = '1';
        document.scrollingElement.style.overflow = 'hidden';
    }else{
        document.querySelector(".layer").style.opacity = '0';
        setTimeout(()=>{
            document.querySelector(".layer").style.top = '-100vh';
            document.scrollingElement.style.overflow = 'auto';
        }, 400);
    }
}
document.querySelector(".layer").onclick = () => {
    document.querySelector(".showmenu").classList.remove("active");
    document.querySelector(".mobilemenu").classList.remove("active");
    document.querySelector(".layer").style.opacity = '0';
    setTimeout(()=>{
        document.querySelector(".layer").style.top = '-100vh';
        document.scrollingElement.style.overflow = 'auto';
    }, 400);
}
