$(document).ready(() => {
    $("#itemSlider").owlCarousel({
        items: 3,
        loop: 0,
        margin: 30,
        nav: 1,
        dots: 0,
        navText: ['<svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6406 21.3333L64.5 21.3333L64.5 28.6667L15.6406 28.6667L14.4548 28.6667L15.2826 29.5157L29.3701 43.9644L24.3687 49.2773L0.698328 25L24.3687 0.722721L29.3701 6.0356L15.2826 20.4843L14.4548 21.3333L15.6406 21.3333Z" stroke="#60B1DE"/></svg>', '<svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6406 21.3333L64.5 21.3333L64.5 28.6667L15.6406 28.6667L14.4548 28.6667L15.2826 29.5157L29.3701 43.9644L24.3687 49.2773L0.698328 25L24.3687 0.722721L29.3701 6.0356L15.2826 20.4843L14.4548 21.3333L15.6406 21.3333Z" stroke="#60B1DE"/></svg>'],
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            }
        }
    });
});

// Modal
document.querySelectorAll(".showmodal").forEach(item => {
    item.onclick = () => {
        let modalname = item.getAttribute("href"),
            modal = document.querySelector(`.modal${modalname}`);
        modal.style.opacity = 1;
        modal.style.top = 0;
        modal.classList.add("show");
        document.scrollingElement.style.overflow = 'hidden';
        return false;
    }
});
document.querySelectorAll(".modal").forEach(item=>{
    item.addEventListener("click",(e)=>{
        if(e.target == item.querySelector(".close_modal") || e.target == item){
            item.style.opacity = 0;
            item.classList.remove("show");
            setTimeout(()=>{
                item.style.top = '-100vh';
                document.scrollingElement.style.overflow = 'auto';
            },300);
        }
    });
})

ymaps.ready(()=>{
    let center = [55.746725, 37.718953];
    if(window.innerWidth <= 1199){
        center = [55.746725, 37.716953];
    }
    var myMap = new ymaps.Map("map",{
        center: center,
        zoom: 18,
        controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([55.746725, 37.716953]));
});