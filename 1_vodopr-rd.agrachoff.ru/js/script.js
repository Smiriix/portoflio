$(document).ready(()=>{
    $('.jobs-slider').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });
    
    $('.feedbacks-block').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })
    $('.feedbackdocument').owlCarousel({
        nav: true,
        dots:false,
        center: true,
        items:3,
        loop:true,
        margin: 0,
        responsive:{
            0:{
                items:1
            },
            1100:{
                items:3
            }
        }
    });
    
    $('.masters-carusel').owlCarousel({
        items:3,
        center: true,
        loop:true,
        margin: 10,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:3
            }
        }
    });
    

});
$('.videoslider').owlCarousel({
    items:3,
    loop:true,
    margin: 15,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        }
    }
});
$('.sertificateSlider').owlCarousel({
    items:3,
    loop:true,
    margin: 15,
    nav: true,
    dots: false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        }
    }
});

if(document.querySelectorAll("#map_regions").length>0){    
    document.querySelector("#map_regions").addEventListener('click',(e)=>{
        let polygons = document.querySelector("#map_regions").querySelectorAll(".polygon");
        let text = document.querySelector("#map_regions").querySelectorAll(".polgon_name");
        let cityblock = document.querySelector(".regions").querySelectorAll(".cityblock");
        for(let i=0;i<polygons.length;i++){
            if(e.target == polygons[i] || e.target == text[i].querySelector("tspan")){
                for(let j=0;j<polygons.length;j++){
                    text[j].classList.remove("active");
                    polygons[j].classList.remove("active");
                    cityblock[j].classList.remove("show");
                }
                cityblock[i].classList.add("show");
                text[i].classList.add("active");
                polygons[i].classList.add("active");
            }
        }
    });
}

if(document.querySelectorAll(".range-price").length > 0){
    let range = document.querySelector(".range-price");
    let check = [false, false];


    range.addEventListener('mousedown',(e)=>{
        let dots = document.querySelectorAll(".dot-price");
        for(let i=0;i<dots.length;i++){
            if(e.target == dots[i] && e.button == 0){
                check[i] = true;
                document.onselectstart = () => {
                    return false;
                }
            }
        }
    });
    range.addEventListener('touchstart',(e)=>{
        console.log(e.target);
        let dots = document.querySelectorAll(".dot-price");
        for(let i=0;i<dots.length;i++){
            if(e.target == dots[i] && e.button == 0){
                alert(i);
                check[i] = true;
            }
        }
    });

    document.onmouseup = () => {
        check[0] = false; check[1] = false;
        document.onselectstart = () => {
            return true;
        }
    }
    range.addEventListener('touchend',(e)=>{
        check[0] = false; check[1] = false;
    });
    document.addEventListener('mousemove',(e)=>{
        let range = document.querySelector(".range-price"),
            width = range.clientWidth,
            slide = range.querySelector(".slide"),
            rangeLeft = range.offsetLeft,
            pos = e.clientX - rangeLeft,
            dots = range.querySelectorAll(".dot-price"),
            min = range.getAttribute("min"),
            max = range.getAttribute("max");
        if(pos<0){
            pos = 0;
        }
        if(pos>width){
            pos = width;
        }
        if(check[0]==true){
            if(pos>dots[1].offsetLeft-12){
                pos = dots[1].offsetLeft - 12;
            }
            dots[0].style.left = pos + "px";
            slide.style.left = pos + "px";
            let procent = pos*100/width;
            document.querySelector(".number-price").querySelector(".start-price").innerHTML = Math.floor(procent * max / 100);
        }
        if(check[1]==true){
            if(pos<dots[0].offsetLeft + 12){
                pos = dots[0].offsetLeft + 12;
            }
            dots[1].style.left = pos + "px";
            slide.style.right = (width - pos) + "px";
            let procent = pos*100/width;
            document.querySelector(".number-price").querySelector(".end-price").innerHTML = Math.floor(procent * max / 100);
        }
    });
    document.addEventListener('touchmove',(e)=>{
        console.log(e.touches[0].pageX);
        let range = document.querySelector(".range-price"),
            width = range.clientWidth,
            slide = range.querySelector(".slide"),
            rangeLeft = range.offsetLeft,
            pos = e.touches[0].pageX - rangeLeft,
            dots = range.querySelectorAll(".dot-price"),
            min = range.getAttribute("min"),
            max = range.getAttribute("max");
        if(pos<0){
            pos = 0;
        }
        if(pos>width){
            pos = width;
        }
        if(check[0]==true){
            if(pos>dots[1].offsetLeft-12){
                pos = dots[1].offsetLeft - 12;
            }
            dots[0].style.left = pos + "px";
            slide.style.left = pos + "px";
            let procent = pos*100/width;
            document.querySelector(".number-price").querySelector(".start-price").innerHTML = Math.floor(procent * max / 100);
        }
        if(check[1]==true){
            if(pos<dots[0].offsetLeft + 12){
                pos = dots[0].offsetLeft + 12;
            }
            dots[1].style.left = pos + "px";
            slide.style.right = (width - pos) + "px";
            let procent = pos*100/width;
            document.querySelector(".number-price").querySelector(".end-price").innerHTML = Math.floor(procent * max / 100);
        }
    });
}


if(document.querySelectorAll(".item-page-info").length > 0){
    let miniImgBlock = document.querySelector(".mini-img");
    miniImgBlock.addEventListener("click",(e)=>{
        if(e.target.getAttribute("src") != null){
            document.querySelector("#item-img").setAttribute("src",e.target.getAttribute("src"));
        }
    });
}

let showModal = () => {
    document.querySelector("#modal").style.display = "flex";
    document.scrollingElement.style.overflow = 'hidden';
}
let hideModal = () => {
    document.querySelector("#modal").style.display = "none";
    document.scrollingElement.style.overflow = 'auto';
}
if(document.querySelectorAll("#modal").length > 0){
    document.querySelector("#modal").addEventListener("click",(e)=>{
        if(e.target == document.querySelector("#modal") || e.target == document.querySelector("#close_modal")){
            hideModal();
        }
    });
}

document.onscroll = (e) => {
    if(document.scrollingElement.scrollTop >= 300){
        document.querySelector("header").querySelector(".container-fluid").style.background = "rgb(0 0 0 / 84%)";
    }else{
        document.querySelector("header").querySelector(".container-fluid").style.background = "rgba(0, 0, 0, 0.27)";
    }
}

// Cart
if(document.querySelectorAll("section.cart").length > 0){
    let cart = document.querySelector("section.cart");
        cart.addEventListener('click',(e)=>{
            let btns = cart.querySelectorAll(".calcul-cart-btn");
            console.log(e.target);
            for(let i=0;i<btns.length;i++){
                if(e.target == btns[i]){
                    let price = btns[i].parentElement.querySelector(".item-count");
                    if(Number(price.innerHTML) + Number(btns[i].getAttribute("pluse")>=0)){
                        price.innerHTML = Number(price.innerHTML) + Number(btns[i].getAttribute("pluse"));
                        document.querySelector("button[name=update_cart]").click();
                    }
                    console.log(e.target);
                }
            }
        });
}