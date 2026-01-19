<? require('elements/header.php') ?>
<section class="compare">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title">
                    Сравнение товаров
                </h4>
                <div class="d-flex align-items-start justify-content-between">
                    <div class="compare__categories">
                        <? include("elements/category__card.php"); ?>
                        <? include("elements/category__card.php"); ?>
                        <? include("elements/category__card.php"); ?>
                        <? include("elements/category__card.php"); ?>
                    </div>
                    <div class="compare__items">
                        <div class="compare__slider swiper">
                            <div class="swiper-wrapper">
                                <!-- Slides -->
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                                <div class="swiper-slide">
                                    <? include("elements/product__card.php") ?>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-prev" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="20" fill="white" />
                            <path d="M24.5416 27.5942C24.7499 27.3858 24.8549 27.1392 24.8549 26.8533C24.8549 26.57 24.7508 26.3225 24.5424 26.1142L18.4383 20.01L24.5633 13.885C24.7574 13.6908 24.8549 13.4475 24.8549 13.1558C24.8549 12.8642 24.7508 12.6142 24.5424 12.4058C24.4469 12.3059 24.3318 12.2266 24.2044 12.1728C24.077 12.1191 23.9399 12.092 23.8016 12.0933C23.5183 12.0933 23.2708 12.1975 23.0624 12.4058L16.0624 19.4267C15.9791 19.51 15.9208 19.6008 15.8849 19.6975C15.8499 19.7979 15.8325 19.9036 15.8333 20.01C15.8333 20.1217 15.8508 20.2258 15.8849 20.3225C15.9233 20.4248 15.9839 20.5174 16.0624 20.5933L23.0833 27.6142C23.2783 27.8092 23.5174 27.9058 23.8024 27.9058C24.0866 27.9058 24.3333 27.8025 24.5416 27.5942Z" fill="#015FC9" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-next" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="white" />
                            <path d="M15.4584 12.4058C15.2501 12.6142 15.1451 12.8608 15.1451 13.1467C15.1451 13.43 15.2492 13.6775 15.4576 13.8858L21.5617 19.99L15.4367 26.115C15.2426 26.3092 15.1451 26.5525 15.1451 26.8442C15.1451 27.1358 15.2492 27.3858 15.4576 27.5942C15.5531 27.6941 15.6682 27.7734 15.7956 27.8272C15.923 27.8809 16.0601 27.908 16.1984 27.9067C16.4817 27.9067 16.7292 27.8025 16.9376 27.5942L23.9376 20.5733C24.0209 20.49 24.0792 20.3992 24.1151 20.3025C24.1501 20.2021 24.1675 20.0964 24.1667 19.99C24.1667 19.8783 24.1492 19.7742 24.1151 19.6775C24.0767 19.5752 24.0161 19.4826 23.9376 19.4067L16.9167 12.3858C16.7217 12.1908 16.4826 12.0942 16.1976 12.0942C15.9134 12.0942 15.6667 12.1975 15.4584 12.4058Z" fill="#015FC9" />
                        </svg>
                    </div>
                </div>
                <div class="compare__specs">
                    <div>
                        <input type="checkbox" id='spec1' checked>
                        <label for="spec1">Основные характеристики</label>
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                            <p class="compare__specs_name">
                                Бренд Блеск
                            </p>
                            <div class="spec_slider swiper swiper-no-swiping">
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                            <p class="compare__specs_name">
                                Бренд Блеск
                            </p>
                            <div class="spec_slider swiper swiper-no-swiping">
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                            <p class="compare__specs_name">
                                Бренд Блеск
                            </p>
                            <div class="spec_slider swiper swiper-no-swiping">
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                            <p class="compare__specs_name">
                                Бренд Блеск
                            </p>
                            <div class="spec_slider swiper swiper-no-swiping">
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                            <p class="compare__specs_name">
                                Бренд Блеск
                            </p>
                            <div class="spec_slider swiper swiper-no-swiping">
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                    <div class="swiper-slide">
                                        Grand Line
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<? require('elements/footer.php') ?>