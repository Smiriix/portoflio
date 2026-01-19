$(document).ready(() => {
    $(".pagesSlider").owlCarousel({
        items: 1,
        dots: 1,
        nav: 0,
        center: 1,
        loop: 1,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });
    $(".feedbackSlider").owlCarousel({
        items: 1,
        dots: 0,
        nav: 0,
        center: 1,
        loop: 1,
        margin: 60,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    });
    $(".partnersSlider").owlCarousel({
        items: 2,
        dots: 0,
        nav: 0,
        center: 0,
        loop: 1,
        margin: 69,
        responsive: {
            0: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 6
            }
        }
    });
});

document.querySelectorAll(".showmodal").forEach(item => {
    item.onclick = () => {
        let modalname = item.getAttribute("href"),
            modal = document.querySelector(modalname);
        modal.classList.add("show");
        modal.style.left = '0';
        modal.style.opacity = '1';

        document.querySelector(".modallayer").style.opacity = '0';
        document.querySelector(".mobilemenu").style.left = '-270px';
        document.querySelector("#menubtn").classList.remove("active");
        setTimeout(()=>{
            document.querySelector(".modallayer").style.left = '-100%';
            document.scrollingElement.style.overflow = '';
        }, 300);
        return false;
    }
});
document.querySelectorAll(".closemodal").forEach(item => {
    item.onclick = () => {
        document.querySelectorAll(".modalwindow.show").forEach(k => {
            k.classList.remove("show");
            k.style.opacity = '0';
            setTimeout(() => {
                k.style.left = '-100%';
            }, 300);
            return false;
        });
    }
});
document.querySelectorAll(".modalwindow").forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target == item){
            item.classList.remove("show");
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.left = '-100%';
            }, 300);
        }
    });
});

mobilebtn = document.querySelector("#menubtn");
mobilebtn.onclick = () => {
    mobilebtn.classList.toggle("active");
    if(mobilebtn.classList.contains("active")){
        document.querySelector(".modallayer").style.opacity = '1';
        document.querySelector(".mobilemenu").style.left = '0';
        document.querySelector(".modallayer").style.left = '0';
        document.scrollingElement.style.overflow = 'hidden';
    }else{
        document.querySelector(".modallayer").style.opacity = '0';
        document.querySelector(".mobilemenu").style.left = '-270px';
        setTimeout(()=>{
            document.querySelector(".modallayer").style.left = '-100%';
            document.scrollingElement.style.overflow = '';
        }, 300);
    }
}
document.querySelector(".modallayer").onclick = () => {
    document.querySelector("#menubtn").classList.remove("active");
    document.querySelector(".modallayer").style.opacity = '0';
    document.querySelector(".mobilemenu").style.left = '-270px';
    setTimeout(()=>{
        document.querySelector(".modallayer").style.left = '-100%';
        document.scrollingElement.style.overflow = '';
    }, 300);
}