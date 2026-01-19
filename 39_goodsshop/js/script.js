$(document).ready(() => {
    $("#menuBtn").on("click", () => {
        $("#menuBtn").toggleClass("active");
        $(".header__catalog").toggleClass("active");
    });
    $(".header__catalog--wrapper ul a").each((index, item) => {
        $(item).on("mousemove", () => {
            $(".header__catalog--wrapper ul a.active").removeClass("active");
            $(item).addClass("active");
            $(".header__catalog--panel.active").removeClass('active');
            $(".header__catalog--panel").eq(index).addClass("active");
        });
    });
    $('.main--banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`
    });
    $(".items--view__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    $(".special--banners__slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    })
    $(".partners__slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
    $(".subcategory--wrapper__slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
    $(".single--product__thumb--wrapper").slick({
        dots: false,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        swipe: false
    })
    $(".single--product__thumb--gallery").slick({
        slidesToShow: 5,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '.single--product__thumb--wrapper',
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    })
    $(".category--view__grid").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
    $(".last--news__grid").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: `<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_51)"><circle cx="46" cy="46" r="30" transform="rotate(-180 46 46)" fill="white"/></g><path d="M49.2683 32.5354L37.2578 44.5467C37.086 44.7183 37 44.9157 37 45.139C37 45.3624 37.086 45.5602 37.2578 45.7319L49.2683 57.7422C49.4404 57.9142 49.6378 58 49.8612 58C50.0846 58 50.2823 57.914 50.454 57.7422L51.7423 56.4538C51.9141 56.282 51.9999 56.0843 51.9999 55.861C51.9999 55.6376 51.9141 55.4399 51.7423 55.2681L41.6134 45.139L51.7429 35.0096C51.9147 34.8379 52 34.6401 52 34.4171C52 34.1934 51.9142 33.9957 51.7429 33.824L50.4541 32.5354C50.2824 32.3637 50.0846 32.2784 49.8613 32.2784C49.6378 32.2783 49.4401 32.3637 49.2683 32.5354Z" fill="#70BE42"/><defs><filter id="filter0_d_2_51" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_51"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_51" result="shape"/></filter></defs></svg>`,
        nextArrow: `<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none"><g filter="url(#filter0_d_2_48)"><circle cx="46" cy="46" r="30" fill="white"/></g><path d="M42.7317 59.4646L54.7422 47.4533C54.914 47.2817 55 47.0843 55 46.861C55 46.6376 54.914 46.4398 54.7422 46.2681L42.7317 34.2578C42.5596 34.0858 42.3622 34 42.1388 34C41.9154 34 41.7177 34.086 41.546 34.2578L40.2577 35.5462C40.0859 35.718 40.0001 35.9157 40.0001 36.139C40.0001 36.3624 40.0859 36.5601 40.2577 36.7319L50.3866 46.861L40.2571 56.9904C40.0853 57.1621 40 57.3599 40 57.5829C40 57.8066 40.0858 58.0043 40.2571 58.176L41.5459 59.4646C41.7176 59.6363 41.9154 59.7216 42.1387 59.7216C42.3622 59.7217 42.5599 59.6363 42.7317 59.4646Z" fill="#70BE42"/><defs><filter id="filter0_d_2_48" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="8"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_48"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_48" result="shape"/></filter></defs></svg>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    $(".product--information__tab").on("click", (e) => {
        let panelID = $(e.target).attr("href");
        $(".product--information__tab.active").removeClass("active");
        $(e.target).addClass("active");
        $('.product--information__panel.active').removeClass("active");
        $(`.product--information__panel${panelID}`).addClass("active");
        return false;
    });
    $("#menuBTN").on("click", () => {
        $("#menuBTN").toggleClass("active");
        $(".lightgrey").toggleClass("active");
        $(".header__mobile_list").toggleClass("active");
        if ($("#menuBTN").hasClass("active")) {
            $("body").css({ "overflow": "hidden", 'margin-right': '8px' });
            $(".header__mobile").css({ 'padding-right': '8px' })
        } else {
            $("body").css({ "overflow": "auto", 'margin-right': '0' });
            $(".header__mobile").css({ 'padding-right': '0' })
        }
    });

    $(".showmodal").each((index, item) => {
        $(item).on("click", () => {
            let modalId = $(item).attr("href");
            if (modalId) {
                $(`.modalwindow${modalId}`).addClass("active");
                $("body").css({ "overflow": "hidden", 'margin-right': '8px' });
                $(".header__mobile").css({ 'padding-right': '8px' })



                $("#menuBTN").removeClass("active");
                $(".lightgrey").removeClass("active");
                $(".header__mobile_list").removeClass("active");


                return false;
            }
        });
    });
    $(".modalwindow__close").on("click", () => {
        $(`.modalwindow`).removeClass("active");
        $("body").css({ "overflow": "auto", 'margin-right': '0' });
        $(".header__mobile").css({ 'padding-right': '0' })
    });
});