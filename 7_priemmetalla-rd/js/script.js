$(document).ready(() => {
    $("#feedbackslider").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 2,
        margin: 30,
        autoplay: true,
        navText: ["<img src='assets/img/arrow.png'>", "<img src='assets/img/arrow.png' style='transform: scale(-1, 1)'>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 2,
                nav: true
            }
        }
    });
});

let burgerBtn = document.querySelector("#burger"),
    mobilemenu = document.querySelector("#mobile-menu"),
    layer = document.querySelector(".layer");
burgerBtn.onclick = () => {
    toggleMenu();
    document.scrollingElement.style.overflow = 'hidden';
    mobilemenu.style.opacity = layer.style.opacity = '1';
}
layer.onclick = () => {
    document.scrollingElement.style.overflow = 'auto';
    mobilemenu.style.opacity = layer.style.opacity = '0';
    setTimeout(() => toggleMenu(), 300);
}
let toggleMenu = () => {
    mobilemenu.classList.toggle('active');
    layer.classList.toggle('active');
}


if (document.querySelectorAll(".range-line").length > 0) {
    let range = document.querySelector(".range"),
        circle = range.querySelector(".circle"),
        line = range.querySelector(".line"),
        check = false;

    // PC
    range.onmousedown = () => {
        check = true;
        circle.querySelector("span").style.opacity = "1";
    }

    document.onmouseup = () => {
        check = false;
        circle.querySelector("span").style.opacity = "0";
    }

    document.onselectstart = () => {
        if (check) {
            return false;
        }
    }

    document.addEventListener('mousemove', (e) => {
        if (check) {
            slide(e.clientX);
            updateData();
        }
    });
    // Mobile
    range.addEventListener('touchstart', () => {
        check = true;
        circle.querySelector("span").style.opacity = "1";
    }, false);

    document.addEventListener('touchcancel', () => {
        check = false;
        circle.querySelector("span").style.opacity = "0";
    }, false);

    document.addEventListener('touchmove', (e) => {
        if (check) {
            slide(e.touches[0].clientX);
            updateData();
        }
    }, false);

    let slide = (posx) => {
        let xpos = posx - range.getBoundingClientRect().left;
        if (xpos < 0) {
            xpos = 0;
        }
        if (xpos > range.clientWidth) {
            xpos = range.clientWidth;
        }
        line.style.width = xpos + "px";
        circle.style.left = xpos + "px";
        if (xpos >= range.clientWidth - circle.clientWidth) {
            circle.style.left = range.clientWidth - circle.clientWidth + "px";
        }
    }

    let updateData = () => {
        let rangewidth = range.clientWidth,
            pos = line.clientWidth,
            current = (100 * pos / rangewidth / 2) + 50;
            circle.querySelector("span").innerHTML = (10 / 100 * current).toFixed(0) + " тонн";
    }
    updateData();
}