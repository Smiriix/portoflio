<? include("parts/header.php"); ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Подшипники</a></li>
                    <li><a href="#">Шариковые подшипники</a></li>
                    <li><a href="#">Упорный шариковый подшипник 8100 (51100)</a></li>
                </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <h1 class="page--info__title">Упорный шариковый подшипник 8100 (51100)</h1>
                    <a href="#" class="page--info__share">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="single--product">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="single--product__thumb">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            for ($i = 0; $i < 3; $i++) :
                            ?>
                                <div class="swiper-slide">
                                    <img src="img/images/thumb__product.png" width="526" height="420" alt="thumb">
                                </div>
                            <?
                            endfor;
                            ?>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="col-lg-7">
                <span class="single--product__sku">Артикул 16256653</span>
                <span class="single--product__manufacture">Производитель: Asahi</span>
                <span class="single--product__stock--status">Есть в течении 6 недель</span>
                <span class="single--product__stock">На складе <span>1270 шт.</span></span>
                <span class="single--product__price">
                    38 ₽
                    <span>38 ₽</span>
                </span>
                <span class="single--product__mini--desc">
                    Скоро здесь появится подробное описание. В целом, конечно, глубокий уровень погружения предполагает независимые способы реализации новых предложений. Принимая во внимание показатели успешности, сплочённость команды профессионалов требует анализа как самодостаточных, так и внешне зависимых концептуальных решений.
                </span>
                <div class="single--product__count--wrapper">
                    <div class="single--product__counter">
                        <span data-pluse='-1'></span>
                        <input type="text" min='3' value="1" hidden>
                        <p>1 шт</p>
                        <span data-pluse='1'></span>
                    </div>
                    <button class="single--product__btn action__btn">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product--information">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="product--information__tabs">
                    <a href="#description" class="product--information__tab active">Описание</a>
                    <a href="#specifications" class="product--information__tab">Характеристики</a>
                    <a href="#analogues" class="product--information__tab">Аналоги</a>
                </div>
                <div class="product--information__panels">
                    <div class="product--information__panel active" id="description">
                        <p>
                            Скоро здесь появится подробное описание. В целом, конечно, глубокий уровень погружения предполагает независимые способы реализации новых предложений. Принимая во внимание показатели успешности, сплочённость команды профессионалов требует анализа как самодостаточных, так и внешне зависимых концептуальных решений.
                        </p>
                    </div>
                    <div class="product--information__panel" id="specifications">
                        <div class="product--information__specifications--wrapper">
                            <div class="product--information__specifications">
                                <span>Внутренний диаметр, мм</span>
                                <p>10 мм</p>
                            </div>
                            <div class="product--information__specifications">
                                <span>Наружный диаметр, мм</span>
                                <p>24 мм</p>
                            </div>
                            <div class="product--information__specifications">
                                <span>Ширина</span>
                                <p>9 мм</p>
                            </div>
                            <div class="product--information__specifications">
                                <span>Бренд</span>
                                <p>NTL</p>
                            </div>
                        </div>
                    </div>
                    <div class="product--information__panel" id="analogues">
                        <table class="product--information__analogue_list">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Артикул</td>
                                    <td>Цена</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="">Альтернативная маркировка ISB</a></td>
                                    <td><span>SS6005-ZZ</span></td>
                                    <td><span>По запросу</span></td>
                                </tr>
                                <tr>
                                    <td><a href="">Альтернативная маркировка BECO</a></td>
                                    <td><span>6005 BSS 316 ZZ</span></td>
                                    <td><span>3 062 руб.</span></td>
                                </tr>
                                <tr>
                                    <td><a href="">Альтернативная маркировка BECO</a></td>
                                    <td><span>6005 BSS ZZ</span></td>
                                    <td><span>552 руб.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="recommend--items" style="padding: 50px 0; background: #FAFAFA">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">Мы предлагаем</span>
                <h4 class="section__title">Похожие товары</h4>
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
<?
include("parts/search--form.php");
include("parts/last--news.php");
?>
<? include("parts/footer.php"); ?>