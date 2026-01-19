document.addEventListener("DOMContentLoaded", () => {
    var lastScroll = document.scrollingElement.scrollTop;
    document.onclick = () => {
        document.querySelector('.header__mobile_middle').classList.remove("active");
        document.querySelector('#menuBtn').classList.remove("active");
        document.body.style.cssText = 'overflow: auto';
    }

    document.querySelector(".header__mobile_middle").onclick = (e) => {
        e.stopPropagation();
    }
    document.querySelectorAll(".modalwindow").forEach(item => {
        item.onclick = (e) => {
            e.stopPropagation();
        }
    });
    document.addEventListener("scroll", () => {
        let header = document.querySelector(".header");
        if (document.scrollingElement.scrollTop > lastScroll) {
            header.style.cssText = `top: -${header.querySelector('.header__middle').clientHeight}px`;
        } else {
            header.style.cssText = `top: 0px`;
        }
        lastScroll = document.scrollingElement.scrollTop;
    });
    if (document.querySelector('.single--product__count--wrapper')) {
        var count__wrapper = document.querySelector('.single--product__count--wrapper'),
            count = count__wrapper.querySelector('input'),
            mincount = count.getAttribute('min');
        if (+count.value < +mincount) {
            count.value = +mincount;
            count__wrapper.querySelector("p").innerHTML = count__wrapper.querySelector('input').value + " шт.";
        }
        count__wrapper.querySelectorAll("span").forEach(item => {
            item.addEventListener("click", () => {
                let pluse = +item.getAttribute('data-pluse');
                if (+count.value + pluse >= +mincount) {
                    count.value = +count.value + pluse;
                    count__wrapper.querySelector("p").innerHTML = count.value + " шт.";
                }
            });
        });
    }
    if (document.querySelector(".product--information")) {
        if (document.querySelectorAll(".product--information__tab").length) {
            document.querySelectorAll(".product--information__tab").forEach(item => {
                item.onclick = () => {
                    let panelId = item.getAttribute("href");
                    document.querySelector(".product--information__tab.active").classList.remove("active");
                    item.classList.add("active");
                    document.querySelector(".product--information__panel.active").classList.remove("active");
                    document.querySelector(`.product--information__panel${panelId}`).classList.add("active");
                    return false;
                }
            });
        }
    }
    if (document.querySelector(".faq--wrapper")) {
        let faqItems = document.querySelectorAll(".faq--wrapper__item");
        faqItems.forEach(item => {
            item.querySelector("label").onclick = () => {
                faqItems.forEach(k => {
                    if (k != item) {
                        k.querySelector('input').checked = false;
                    }
                });
            }
        });
    }
    new Swiper('.recommend--items .swiper', {
        spaceBetween: 24,
        slidesPerView: 1,
        loop: false,
        navigation: {
            nextEl: '.recommend--items .swiper-button-next',
            prevEl: '.recommend--items .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    new Swiper('.brands--slider .swiper', {
        spaceBetween: 24,
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
            rows: 1,
        },
        navigation: {
            nextEl: '.brands--slider .swiper-button-next',
            prevEl: '.brands--slider .swiper-button-prev',
        },
        pagination: {
            el: '.brands--slider .swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 2
                }
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                    rows: 2
                }
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                grid: {
                    rows: 2
                }
            }
        }
    });
    new Swiper(".last--news .swiper", {
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: '.last--news .swiper-button-next',
            prevEl: '.last--news .swiper-button-prev',
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
            }
        }
    });
    new Swiper(".single--product .swiper", {
        spaceBetween: 24,
        slidesPerView: 1,
        pagination: {
            el: '.single--product .swiper-pagination',
            type: 'bullets',
        }
    });
    new Swiper('.we--command .swiper', {
        spaceBetween: 45,
        slidesPerView: 2,
        navigation: {
            nextEl: '.we--command .we--command__arrow_next',
            prevEl: '.we--command .we--command__arrow_prev',
        },

        breakpoints: {
            575: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
    new Swiper('.archive-documents .swiper', {
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: {
            nextEl: '.archive-documents .swiper-button-next',
            prevEl: '.archive-documents .swiper-button-prev',
        },
        pagination: {
            el: '.archive-documents .swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            }
        }
    });
    let modalArray = Array(
        '#feedback',
        '#search'
    );
    modalArray.forEach(item => {
        document.querySelectorAll(`[href="${item}"`).forEach(itemShow => {
            itemShow.onclick = (e) => {
                e.stopPropagation();
                if (document.querySelector(".modalwindow.active")) {
                    document.querySelector(".modalwindow.active").classList.remove("active");
                }
                document.body.style.cssText = `overflow: hidden`;
                document.querySelector(`.modalwindow${item}`).classList.add("active");
                return false
            }
        });
    });
    document.querySelectorAll('.modalwindow__close').forEach(item => {
        item.onclick = () => {
            closeModal();
        }
    });
    closeModal = () => {
        document.querySelector(".modalwindow.active").classList.remove("active");
        document.body.style.cssText = `overflow: auto`;
    }
    document.querySelector("#menuBtn").onclick = (e) => {
        e.stopPropagation();
        let mobileMenu = document.querySelector(".header__mobile_middle");
        document.querySelector("#menuBtn").classList.toggle("active");
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains("active")) {
            document.body.style.cssText = `overflow: hidden`;
        } else {
            document.body.style.cssText = `overflow: auto`;
        }
    }
});