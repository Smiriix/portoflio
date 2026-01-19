document.onscroll = () => {
    arrowTop();
    document.querySelectorAll(".parallax").forEach(item => {
        item.style.transform = 'translateY(' + (document.scrollingElement.scrollTop / 5 - 800) * -1 + 'px)';
    });
    document.querySelector(".listikiback").style.transform = 'translateY(' + (document.scrollingElement.scrollTop / 5 - 400) + 'px)';
}
let arrowTop = () => {
    if (document.scrollingElement.scrollTop >= 100) {
        document.querySelector('#top').classList.add("show");
    } else {
        document.querySelector('#top').classList.remove("show");
    }
}
arrowTop();

document.querySelector("#top").onclick = () => {
    document.scrollingElement.scrollTop = 0;
}
let menubtn = document.querySelector("#menubtn"),
    menu = document.querySelector("#menu");

menubtn.onclick = () => {
    if (menubtn.classList.contains('active')) {
        menuHide();
    } else {
        menuShow();
    }
}
menu.addEventListener('click', (e) => {
    if (e.target == menu) {
        menuHide();
    }
});
menu.querySelectorAll("a").forEach(item => {
    item.onclick = () => {
        menuHide();
    }
});
let menuShow = () => {
    menubtn.classList.add("active");
    menu.style.left = 0;
    menu.style.opacity = 1;
    document.scrollingElement.style.overflow = 'hidden';
}
let menuHide = () => {
    menubtn.classList.remove("active");
    menu.style.opacity = 0;
    setTimeout(() => {
        menu.style.left = '-100%';
        document.scrollingElement.style.overflow = '';
    }, 300);
}

document.querySelectorAll(".showmodal").forEach(item => {
    item.onclick = () => {
        let modalname = item.getAttribute("href");
        document.querySelector(modalname).style.opacity = 1;
        document.querySelector(modalname).style.left = 0;
        document.scrollingElement.style.overflow = 'hidden';
        return false;
    }
});
document.querySelectorAll(".modal").forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target == item) {
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.left = '-100%';
                document.scrollingElement.style.overflow = '';
            }, 300);
        }
    });
});
document.querySelectorAll(".closemodal").forEach(item => {
    item.onclick = () => {
        document.querySelectorAll(".modal").forEach(m => {
            m.style.opacity = 0;
            setTimeout(() => {
                m.style.left = '-100%';
                document.scrollingElement.style.overflow = '';
            }, 300);
        });
    }
});
document.querySelector("#porfoliomore").onclick = () => {
    document.querySelectorAll(".portfoliohide").forEach(item=>{
        item.classList.toggle('show');
    });
}