<section class="brands--slider">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">
                    Мы работаем
                </span>
                <h4 class="section__title">
                    Бренды
                </h4>
                <div class="brands--slider__wrapper">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            for ($i = 0; $i < 21; $i++) :
                            ?>
                                <div class="swiper-slide">
                                    <a href="#" class="brands--slider__item">
                                        <img src="img/images/thumb__brand.jpg" width="306" height="130" alt="brand">
                                    </a>
                                </div>
                            <?
                            endfor;
                            ?>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <div class="swiper-pagination"></div>
                <a href="#" class="section__btn">
                    Все бренды
                </a>
            </div>
        </div>
    </div>
</section>