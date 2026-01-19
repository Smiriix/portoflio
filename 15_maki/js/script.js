$(document).ready(() => {
    let headerH = document.querySelector(".header").clientHeight;
    document.querySelector("body").style.paddingTop = `${headerH}px`;
    if (document.querySelectorAll(".main__banner").length > 0) {
        document.querySelector(".main__banner").style.height = `calc(100vh - ${headerH}px)`;
        if (document.querySelector(".main__banner").querySelectorAll(".slider".length > 0)) {
            setTimeout(showSlide, 5000);
        }
    }

    $("#otherprojectsSlider").owlCarousel({
        items: 5,
        margin: 50,
        loop: 0,
        nav: 0,
        dots: 0
    });
});

let slideIndex = 0;
let showSlide = () => {
    let slides = document.querySelector(".main__banner").querySelectorAll(".slide");
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
        // slides.forEach(item=>{
        //     item.classList.remove("active");
        // });
    }
    document.querySelector(".main__banner").querySelector(".slide.active").classList.add("current");
    slides[slideIndex].classList.add("active");
    setTimeout(() => {
        document.querySelector(".main__banner").querySelector(".slide.active.current").className = "slide";
    }, 1000);
    setTimeout(showSlide, 5000);
}


if (document.querySelectorAll(".showmodal").length > 0) {
    document.querySelectorAll(".showmodal").forEach(item => {
        item.onclick = () => {
            let modalname = item.getAttribute("href");
            let modal = document.querySelector(`${modalname}`);
            modal.classList.add("show")
            modal.style.top = 0;
            modal.style.opacity = 1;
            return false;
        }
    });
    document.querySelectorAll(".closemodal").forEach(item => {
        item.onclick = () => {
            document.querySelectorAll(".modal.show").forEach(m => {
                m.classList.remove('show');
                m.style.opacity = 0;
                setTimeout(() => {
                    m.style.top = "-100vh";
                }, 300);
            })
        }
    })
    document.querySelectorAll(".modal").forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target == item) {
                item.classList.remove('show');
                item.style.opacity = 0;
                setTimeout(() => {
                    item.style.top = "-100vh";
                }, 300);
            }
        });
    });
}