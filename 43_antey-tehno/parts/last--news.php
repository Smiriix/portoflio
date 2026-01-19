<section class="last--news">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">
                    Товары
                </span>
                <h4 class="section__title">
                    Новости
                </h4>
                <div class="last--news__slider">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            for ($i = 0; $i < 3; $i++) :
                            ?>
                                <div class="swiper-slide">
                                    <div class="last--news__item">
                                        <img src="img/images/thumb__post.jpg" width="306" height="222" alt="new" class="last--news__item_thumb">
                                        <div class="last--news__item_data">
                                            <span class="last--news__item_date">16.06.2023</span>
                                            <p class="last--news__item_name">
                                                Подшипники АнтейТехно - high quality product
                                            </p>
                                            <span class="last--news__item_desc">
                                                Подшипниковая продукция Антей Техно - это высококачественный продукт , в основе...
                                                Подшипниковая продукция Антей Техно - это высококачественный продукт , в основе...
                                                Подшипниковая продукция Антей Техно - это высококачественный продукт , в основе...
                                            </span>
                                            <a href="#" class="last--news__item_permalink">Подробнее...</a>
                                        </div>
                                    </div>
                                </div>
                            <?
                            endfor;
                            ?>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <a href="#" class="section__btn">
                    Все новости
                </a>
            </div>
        </div>
    </div>
</section>