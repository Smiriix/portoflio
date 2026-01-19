<section class="we--production fade__top">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title dark">
                    наше производство
                </h4>
                <div class="we--production__slider">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            $k = 0;
                            for ($i = 0; $i < 5; $i++) :
                                $k++;
                            ?>
                                <div class="swiper-slide">
                                    <div class="we--production__slide">
                                        <a href="#">
                                            <img src="img/images/item__thumb.jpg" width="636" height="496" alt="protfolio">
                                        </a>
                                        <a href="#">
                                            <img src="img/images/item__thumb.jpg" width="636" height="496" alt="protfolio">
                                        </a>
                                        <a href="#">
                                            <img src="img/images/item__thumb.jpg" width="636" height="496" alt="protfolio">
                                        </a>
                                        <a href="#">
                                            <img src="img/images/item__thumb.jpg" width="636" height="496" alt="protfolio">
                                        </a>
                                        <a href="#">
                                            <img src="img/images/item__thumb.jpg" width="636" height="496" alt="protfolio">
                                        </a>
                                    </div>
                                </div>
                            <?
                                if ($k == 5) {
                                    $k = 0;
                                }
                            endfor;
                            ?>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <a href="#" class="section__btn">
                    Смотреть портфолио
                </a>
            </div>
        </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</section>