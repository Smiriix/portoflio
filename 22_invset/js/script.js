$(document).ready(()=>{ 
    $("#feedbackSlider").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: 1,
        arrows: true
    });
    $("#burgerBtn").click(()=>{
        $("#burgerBtn").toggleClass("active");
        $(".header__nav").toggleClass("active");
    });
});
document.querySelectorAll(".showmodal").forEach(item => {
    item.onclick = () => {
        let modalname = item.getAttribute("href");
        document.querySelector(modalname).classList.add("active");
        document.querySelector(modalname).style.left = '0';
        document.scrollingElement.style.overflow = 'hidden';
    }
});
document.querySelectorAll(".modalwindow").forEach(item => {
    item.addEventListener('click',(e) => {
        if(e.target == item || e.target.classList.contains("closemodal")){
            item.classList.remove("active");
            setTimeout(()=> {
                document.scrollingElement.style.overflow = '';
                item.style.left = '-100%';
            }, 300);
        }
    });
});