$(document).ready(()=>{
    let targetGallery = false;
    if(document.querySelectorAll(".gallery__item").length > 0){
        document.querySelectorAll(".gallery__item").forEach(item => {
            item.addEventListener('mousedown',(e)=>{
                if(e.target.classList.contains("gallery__item_btn")){
                    targetGallery = item;
                }
            });
            item.addEventListener('touchstart',(e)=>{
                if(e.target.classList.contains("gallery__item_btn")){
                    targetGallery = item;
                }
            });
            document.addEventListener("touchmove",(e)=>{
                if(targetGallery){
                    let posX = (e.touches[0].clientX - targetGallery.getBoundingClientRect().left)  * 100 / targetGallery.clientWidth;
                    if(posX < 0){
                        posX = 0;
                    }
                    if(posX > 100){
                        posX = 100;
                    }
                    targetGallery.querySelector(".gallery__item_pos").style.cssText = `left: ${posX}%`;
                    targetGallery.querySelectorAll("img")[1].style.cssText = `clip-path: polygon(${posX}% 0%, 100% 0%, 100% 100%, ${posX}% 100%);`;
                }
            });
            document.addEventListener('mousemove',(e)=>{
                if(targetGallery){
                    let posX = (e.clientX - targetGallery.getBoundingClientRect().left)  * 100 / targetGallery.clientWidth;
                    if(posX < 0){
                        posX = 0;
                    }
                    if(posX > 100){
                        posX = 100;
                    }
                    targetGallery.querySelector(".gallery__item_pos").style.cssText = `left: ${posX}%`;
                    targetGallery.querySelectorAll("img")[1].style.cssText = `clip-path: polygon(${posX}% 0%, 100% 0%, 100% 100%, ${posX}% 100%);`;
                }
            });
        });
    }
    document.addEventListener('mouseup',()=>{
        targetGallery = false;
    });
    document.addEventListener("touchend",()=>{
        targetGallery = false;
    })
    $(".header__menu_btn").on("click",()=>{
        $(".header").toggleClass("active");
        $("body").toggleClass("active")
        return false;
    })
    $(document).click((e)=>{
        if (!$(e.target).closest(".header__bottom").length) {
            if(window.innerWidth > 991){
                $(".header").removeClass("active");
                $("body").removeClass("active")
                return;
            }
        }
    });
    $(".showmodal").each((index, item)=>{
        $(item).on("click",()=>{
            $(`${ $(item).attr("href")}`).toggleClass("active");
            $(`${ $(item).attr("href")}`).css({"left": "0"});
            $("body").css({"overflow":"hidden"});
            return false;
        });
    });
    $(".modalwindow__close").each((index, item)=>{
        $(item).on("click",()=>{
            let t = $(".modalwindow.active");
            t.removeClass("active");
            setTimeout(()=>{
                t.css({"left": "-100%"});
                $("body").css({"overflow":"auto"});
            }, 300);
        });
    });
    $(".header__bottom_nav a").each((index, item)=>{
        $(item).on("mousemove",()=>{
            $(".header__bottom_nav li.active").removeClass("active");
            $(item)[0].parentElement.classList.add("active");
            $(".header__bottom_subnav--items")[0].style.cssText = `--indexY: ${index}`;
            $(".header__bottom_subnav--img.active").removeClass("active");
            $(".header__bottom_subnav--img").eq(index).addClass("active");
        });
    });
    $("#mobileMenu").on("click",()=>{
        $("#mobileMenu").toggleClass("active");
        $("body").toggleClass("active");
        $(".header__mobile--wrapper").toggleClass("active");
        return false;
    })
});