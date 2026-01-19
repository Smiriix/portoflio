let SlideIndex = 1;

let pluse = (e) => {
    SlideIndex += e;
    showSlide();
}

let showSlide = () => {
    let slides = document.querySelector('.banner').querySelectorAll(".slide"),
        dots = document.querySelector('.banner').querySelectorAll('.dot');
    if (SlideIndex < 1){SlideIndex = slides.length}
    if (SlideIndex > slides.length){SlideIndex = 1}
    slides.forEach(item => {
        item.classList.remove("active");
    })
    dots.forEach(item=>{
        item.classList.remove("active");
    })
    slides[SlideIndex - 1].classList.add("active");
    dots[SlideIndex - 1].classList.add("active");
}
document.onmousemove = (e) => {
    let cloud = document.querySelectorAll(".cloud");
    cloud.forEach(item=>{
        item.style.transform = `translateY(-${e.clientY / 15}px)`;
    });
}
let menuBtn = document.querySelector("#menubtn"),
    mobileMenu = document.querySelector(".mobilemenu");
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    if(menuBtn.classList.contains("active")){
        document.scrollingElement.style.overflow = 'hidden';
    }else{
        document.scrollingElement.style.overflow = '';
    }
}