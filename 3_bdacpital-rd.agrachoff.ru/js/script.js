$(document).ready(() => {
    $(".owl-our-events").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        loop: true,
        margin: 29,
        navText: [
            '<svg width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 14.5L11 28" stroke="#3F3F3F" stroke-width="2"/></svg>', 
            '<svg width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 14.5L11 28" stroke="#3F3F3F" stroke-width="2"/></svg>'
        ],
        responsive: {
            0: {
                items: 1
            },
            993: {
                items: 3
            }
        }
    });
    $(".photos-slider").owlCarousel({
        items: 1,
        nav: true,
        center: true,
        dots: false,
        loop: true,
        navText: [
            '<svg width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 14.5L11 28" stroke="#3F3F3F" stroke-width="2"/></svg>', 
            '<svg width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L2 14.5L11 28" stroke="#3F3F3F" stroke-width="2"/></svg>'
        ],
    });
});

let showModal = () => {
    document.querySelector("#modal").classList.add("active");
    document.scrollingElement.style.overflow = 'hidden';
}
let hideModal = () => {
    document.querySelector("#modal").classList.remove("active");
    document.scrollingElement.style.overflow = 'auto';
}
let mappoints = document.querySelectorAll(".map-point");
for(let i=0;i<mappoints.length;i++){
    mappoints[i].onclick = () => {
        showModal();
    }
}
document.querySelector("#modal").addEventListener('click',(e)=>{
    if(e.target == document.querySelector("#modal") || e.target == document.querySelector("#close_modal")){
        hideModal();
    }
});