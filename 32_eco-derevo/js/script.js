$(document).ready(() => {
    $(".header__catalog_block ul li").each((index, item) => {
        $(item).on("mousemove", () => {
            $(".header__catalog_block ul li.active").removeClass("active");
            $(item).addClass("active");
            $(".header__catalog_center--container.active").removeClass("active");
            $(".header__catalog_center--container").eq(index).addClass("active");
            $(".header__catalog_right--item.active").removeClass("active");
            $(".header__catalog_right--item").eq(index).addClass("active");
        });
    });
    $(".product--info__tab").each((index, item)=>{
        $(item).on("click",()=>{
            $(".product--info__tab.active").removeClass("active");
            $(item).addClass("active");
            $(".product--info__panel.active").removeClass("active");
            $(".product--info__panel").eq(index).addClass("active");
            return false;
        });
    });
    $(".map--wrapper__address--list li:first-child").on("click",()=>{
        $(".map--wrapper__address--list").toggleClass("hide");
    });
    $("#menuBTN").on('click',()=>{
        $("#menuBTN").toggleClass("active");
        $('.header__nav--menu').toggleClass("active");
    });
    $("#sidebarfilter").on("change",()=>{
        if($("#sidebarfilter")[0].checked){
            $("html")[0].style.cssText = "overflow: hidden";
        }else{
            $("html")[0].style.cssText = "display: auto";
        }
    });

    $(".header__categorys_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            }
        ]
    })
    $(".mainSlider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>'
    })
    $(".hit--order__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                dots: false
              }
            }
        ]
    })
    $(".specials__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    $(".partner__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $(".category__subcategory_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>'
    
    });

    $(".product--wrapper__thumb").slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        swipe: false,
        allowTouchMove: false
    });
    $(".product--wrapper__gallery").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 5,
        asNavFor: '.product--wrapper__thumb',
        focusOnSelect: true,    
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    
    });
    $(".about--gallery__slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1111)"><circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="white"/></g><path d="M38.1789 27.0236L30.1719 35.0311C30.0574 35.1455 30 35.2771 30 35.426C30 35.5749 30.0574 35.7068 30.1719 35.8212L38.1789 43.8281C38.2936 43.9428 38.4252 44 38.5742 44C38.723 44 38.8548 43.9426 38.9693 43.8281L39.8282 42.9692C39.9427 42.8547 39.9999 42.7229 39.9999 42.574C39.9999 42.4251 39.9427 42.2933 39.8282 42.1788L33.0756 35.426L39.8286 28.6731C39.9431 28.5586 40 28.4267 40 28.2781C40 28.1289 39.9428 27.9971 39.8286 27.8827L38.9694 27.0236C38.8549 26.9092 38.723 26.8523 38.5742 26.8523C38.4252 26.8522 38.2934 26.9091 38.1789 27.0236Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1111" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1111"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1111" result="shape"/></filter></defs></svg>',
        nextArrow: '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none"><g filter="url(#filter0_d_406_1112)"><circle cx="36" cy="36" r="20" fill="white"/></g><path d="M33.8211 43.9764L41.8281 35.9689C41.9426 35.8545 42 35.7229 42 35.574C42 35.4251 41.9426 35.2932 41.8281 35.1788L33.8211 27.1719C33.7064 27.0572 33.5748 27 33.4258 27C33.277 27 33.1452 27.0574 33.0307 27.1719L32.1718 28.0308C32.0573 28.1453 32.0001 28.2771 32.0001 28.426C32.0001 28.5749 32.0573 28.7067 32.1718 28.8212L38.9244 35.574L32.1714 42.3269C32.0569 42.4414 32 42.5733 32 42.7219C32 42.8711 32.0572 43.0029 32.1714 43.1173L33.0306 43.9764C33.1451 44.0908 33.277 44.1477 33.4258 44.1477C33.5748 44.1478 33.7066 44.0909 33.8211 43.9764Z" fill="#76BB20"/><defs><filter id="filter0_d_406_1112" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_406_1112"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_406_1112" result="shape"/></filter></defs></svg>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
});