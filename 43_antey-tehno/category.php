<?
include("parts/header.php");
?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Каталог</a></li>
                </ul>
                <h1 class="page--info__title">Каталог</h1>
            </div>
        </div>
    </div>
</section>
<section class="catalog--categories">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="catalog--wrapper__grid">
                    <?
                    for ($i = 0; $i < 7; $i++) :
                    ?>
                        <a href="#" class="category--card align-items-center">
                            <img src="img/images/thumb__category.png" width="160" height="160" alt="category" class="category--card__thumb">
                            <span class="category--card__data">
                                <span class="category--card__name">Подшипники</span>
                            </span>
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
<section class="brands--slider" style="background: #fff;">
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
<?
include("parts/footer.php");
?>