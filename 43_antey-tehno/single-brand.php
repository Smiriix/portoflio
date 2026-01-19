<? include("parts/header.php"); ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Бренды</a></li>
                    <li><a href="#">SKF</a></li>
                </ul>
                <h1 class="page--info__title">SKF</h1>
            </div>
        </div>
    </div>
</section>
<section class="single--brand">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-4">
                <img src="img/images/thumb__document.jpg" width="416" height="590" alt="document">
                <span>Сертификат соответствия NSK на подшипники качения</span>
            </div>
            <div class="col-lg-7">
                <h4>SKF</h4>
                <p>Шведская интернациональная машиностроительная компания, крупнейший в мире[2] производитель подшипников, систем смазки и мехатроники. Штаб-квартира компании расположена в Гётеборге.</p>
                <p>Основана в 1907 году шведским инженером и изобретателем Свеном Вингквистом и промышленником Акселем Карландером. К 1910 году компания насчитывала уже 325 сотрудников и владела дочерней компанией в Великобритании. </p>
                <p>В 1926 году начала производство экспериментальных автомобилей дочерняя компания SKF[3] — Volvo, созданная топ-менеджерами SKF (полностью независимая с 1935 года). </p>
                <p>Во время Второй Мировой Войны срывала поставки подшипников для «Кёртис-Райт авиэйшн корпорейшн», производившей двигатели для американских ВВС, в то же время поставляя гигантские партии подшипников (более 600000 штук ежегодно) для нацистских клиентов через Южную Америку.</p>
                <p>шведская интернациональная машиностроительная компания, крупнейший в мире[2] производитель подшипников, систем смазки и мехатроники. Штаб-квартира компании расположена в Гётеборге.</p>
                <p>Основана в 1907 году шведским инженером и изобретателем Свеном Вингквистом и промышленником Акселем Карландером. К 1910 году компания насчитывала уже 325 сотрудников и владела дочерней компанией в Великобритании. </p>
                <p>В 1926 году начала производство экспериментальных автомобилей дочерняя компания SKF[3] — Volvo, созданная топ-менеджерами SKF (полностью независимая с 1935 года). </p>
                <p>Во время Второй Мировой Войны срывала поставки подшипников для «Кёртис-Райт авиэйшн корпорейшн», производившей двигатели для американских ВВС, в то же время поставляя гигантские партии подшипников (более 600000 штук ежегодно) для нацистских клиентов через Южную Америку.</p>
                <a href="#" class="action__btn stroke">
                    Перейти на сайт бренда
                </a>
            </div>
        </div>
    </div>
</section>
<section class="filter">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form action="#" class="filter__wrapper">
                    <div class="filter__grid">
                        <div class="filter__item">
                            <p class="filter__item_name">Внутренний диаметр, мм</p>
                            <input type="number" placeholder="От">
                            <input type="number" placeholder="До">
                        </div>
                        <div class="filter__item">
                            <p class="filter__item_name">Наружный диаметр, мм</p>
                            <input type="number" placeholder="От">
                            <input type="number" placeholder="До">
                        </div>
                        <div class="filter__item">
                            <p class="filter__item_name">Ширина, мм</p>
                            <input type="number" placeholder="От">
                            <input type="number" placeholder="До">
                        </div>
                        <div class="filter__item">
                            <p class="filter__item_name">Бренд</p>
                            <select>
                                <option value="">Все</option>
                                <option value="SKF">SKF</option>
                                <option value="FAG-INA(Schaeffler)">FAG-INA(Schaeffler)</option>
                                <option value="IKO">IKO</option>
                                <option value="Mcgill">Mcgill</option>
                                <option value="KOYO">KOYO</option>
                                <option value="NSK">NSK</option>
                                <option value="ANT">ANT</option>
                                <option value="STIEBER">STIEBER</option>
                            </select>
                        </div>
                    </div>
                    <a class="action__btn stroke">Сбросить</a>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="catalog--items">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="catalog--items__sort">
                    <label>
                        Сортировать по:
                        <select name="" id="">
                            <option value="price">Цене</option>
                            <option value="price">Цене</option>
                        </select>
                    </label>
                    <label>
                        На странице:
                        <select name="" id="">
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="60">60</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                </div>
                <div class="catalog--items__grid">
                    <?
                    for ($i = 0; $i < 16; $i++) {
                        include("parts/single--product.php");
                    }
                    ?>
                </div>
                <a href="#" class="catalog--items__btn">Показать ещё</a>
                <div class="catalog--items__pagination d-flex align-items-center justify-content-center">
                    <a href="#">Назад</a>
                    <ul>
                        <li><span>1</span></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>...</li>
                        <li><a href="#">4</a></li>
                    </ul>
                    <a href="#">Вперед</a>
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
<?
include("parts/search--form.php");
?>
<section class="recommend--items" style="padding: 50px 0;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">Товары</span>
                <h4 class="section__title">Каталоги SKF</h4>
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
<? include("parts/footer.php"); ?>