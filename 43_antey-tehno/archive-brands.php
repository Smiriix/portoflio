<? include("parts/header.php") ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Бренды</a></li>
                </ul>
                <h1 class="page--info__title">Бренды</h1>
            </div>
        </div>
    </div>
</section>
<section class="archive--brands">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="archive--brands__grid">
                    <?
                    for ($i = 0; $i < 16; $i++) :
                    ?>
                        <a href="#" class="archive--brands__item">
                            <img src="img/images/thumb__brand.jpg" width="246" height="67" alt="brand">
                            <span>SKF</span>
                        </a>
                    <?
                    endfor;
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="recommend--items" style="padding: 50px 0; background: #FAFAFA">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">Товары</span>
                <h4 class="section__title">Рекомендуемые</h4>
                <div class="recommend--items__slider">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            for ($i = 0; $i < 15; $i++) :
                            ?>
                                <div class="swiper-slide">
                                    <? include("parts/single--product.php") ?>
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
                    Смотреть все
                </a>
            </div>
        </div>
    </div>
</section>
<? include("parts/footer.php") ?>