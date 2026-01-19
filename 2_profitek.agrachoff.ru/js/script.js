$(document).ready(()=>{
    $('.top__items').owlCarousel({
        center: true,
        loop: true,
        items: 3,
        margin: 70,
        nav: true,
        dots: false,
        responsive:{
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: true,
            }
        },
        navText: ['<img src="assets/img/arrow_prev.svg">','<img src="assets/img/arrow_next.svg">']
    });
    $('.companys').owlCarousel({
        loop: true,
        items: 6,
        margin: 100,
        nav: true,
        dots: false,
        responsive:{
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 6
            }
        },
        navText: ['<img src="assets/img/arrow_prev.svg">','<img src="assets/img/arrow_next.svg">']
    });
});

if(document.querySelectorAll(".fix").length>0){
    document.onscroll = () => {
        if(document.scrollingElement.scrollTop >= 200){
            document.querySelector(".fix").style.padding = "17px 0";
        }else{
            document.querySelector(".fix").style.padding = "50px 0";
        }
    }
}

if(document.querySelectorAll(".item__info").length > 0){
    document.querySelector(".colors").querySelector(".example").addEventListener('click',(e)=>{
        let colors = document.querySelectorAll(".clr");
        for(let i=0;i<colors.length;i++){
            if(e.target == colors[i]){
                document.querySelector(".color-name").querySelector("span").innerHTML = e.target.getAttribute("color");
            }
        }
    });
    document.querySelector(".arrow").addEventListener('click',(e)=>{
        let arrows = document.querySelector(".arrow").querySelectorAll("a");
        for(let i=0;i<arrows.length;i++){
            if(e.target == arrows[i]){
                let num = document.querySelector(".add-cart").querySelector(".count");
                if(Number(num.value) + Number(arrows[i].getAttribute("pluse"))>=0){
                    num.value = Number(num.value) + Number(arrows[i].getAttribute("pluse"));
                }
            }
        }
    });
}