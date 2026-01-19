<? require("components/header.php") ?>
<!-- Скрытый H1 начало -->
<h1 class="hide--title">Изделия из натурального камня</h1>
<!-- Скрытый H1 конец -->
<section class="main--banner">
    <div class="swiper">
        <div class="swiper-wrapper">
            <?
            for ($i = 0; $i < 5; $i++) :
            ?>
                <div class="swiper-slide">
                    <div class="main--banner__slide" style="background-image:url('img/images/banner__main.png');">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="main--banner__slide_data" data-swiper-parallax-x='-23%'>
                                        <h2 class="main--banner__slide_title">Изделия из натурального камня</h2>
                                        <p class="main--banner__slide_subtitle">под индивидуальный заказ</p>
                                        <span class="main--banner__slide_desc">Стильно, прочно, и долговечно!</span>
                                        <p class="main--banner__slide_ul--title">Мы изготавливаем и устанавливаем:</p>
                                        <ul class="main--banner__slide_ul">
                                            <li>Столешницы</li>
                                            <li>Подоконники</li>
                                            <li>Ступени в дом</li>
                                            <li>Уличные ступени</li>
                                            <li>Садовые накрывкиыва</li>
                                        </ul>
                                        <a href="#" class="main--banner__slide_btn">В каталог</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?
            endfor;
            ?>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</section>
<?
include("components/catalog__section.php");
include("components/stats.php");
include("components/items__slider.php");
?>
<section class="why--we fade__top">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <h4 class="section__title dark">
                    почему выбирают нас
                </h4>
                <div class="why--we__grid">
                    <div class="why--we__item">
                        <div class="why--we__item_data">
                            <p class="why--we__item_name">Бесплатный замер и расчет</p>
                            <span class="why--we__item_desc">
                                Наш специалист приедет к Вам с образцами, проведет точные замер и разчет стоимости, предложит варианты монтажа
                            </span>
                        </div>
                    </div>
                    <div class="why--we__item">
                        <div class="why--we__item_data">
                            <p class="why--we__item_name">Собственное производство</p>
                            <span class="why--we__item_desc">
                                Мы закупаем камень у прямого дистрибьютера благодаря чему гарантируем быстрые сроки выполнения заказа.
                            </span>
                        </div>
                    </div>
                    <div class="why--we__item">
                        <div class="why--we__item_data">
                            <p class="why--we__item_name">Большой выбор цветов</p>
                            <span class="why--we__item_desc">
                                Специалист по замерам предоставит Вам образцы цветов, доступных для заказа.
                            </span>
                        </div>
                    </div>
                    <div class="why--we__item">
                        <div class="why--we__item_data">
                            <p class="why--we__item_name">Монтаж любой сложности</p>
                            <span class="why--we__item_desc">
                                Вы предлагаете идею, а мы - варианты монтажа. Качество установки подтверждено большим количеством успешных проектов и довольных клиентов.
                            </span>
                        </div>
                    </div>
                </div>
                <a href="#" class="section__btn fill">
                    Оставить заявку
                </a>
            </div>
        </div>
    </div>
</section>
<?php
include("components/adventages.php");
include("components/we--ideas.php");
include("components/we-production.php");
?>


<? require("components/footer.php") ?>