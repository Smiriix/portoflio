<?
include("parts/header.php");
?>
<section class="main--banner">
    <img src="img/images/banner__main.jpg" width="961" height="686" alt="background" class="main--banner__bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <h1 class="main--banner__title">
                    ИМПОРТНЫЕ ПОДШИПНИКИ ДЛЯ ВАШЕГО ОБОРУДОВАНИЯ
                </h1>
                <span class="main--banner__subtitle">
                    В наличии корпусные узлы, шариковые и<br>
                    роликовые серии подшипников
                </span>
                <a href="#" class="action__btn">
                    Заказать звонок
                </a>
            </div>
        </div>
    </div>
</section>
<section class="stats">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="stats__grid">
                    <div class="stats__item">
                        <span class="stats__item_value">50 000</span>
                        <span class="stats__item_key">наименований товаров</span>
                    </div>
                    <div class="stats__item">
                        <span class="stats__item_value">9</span>
                        <span class="stats__item_key">лет на рынке </span>
                    </div>
                    <div class="stats__item">
                        <span class="stats__item_value">42+</span>
                        <span class="stats__item_key">доверяют нам<br>организацию связи</span>
                    </div>
                    <div class="stats__item">
                        <span class="stats__item_value">19</span>
                        <span class="stats__item_key">Оптовых клиентов</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="catalog--wrapper">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="section__suptitle">Мы предлагаем</span>
                <h4 class="section__title">Каталог товаров</h4>
                <div class="catalog--wrapper__grid">
                    <?
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    include("parts/single--category.php");
                    ?>
                </div>
                <a href="#" class="section__btn">
                    В каталог
                </a>
            </div>
        </div>
    </div>
</section>
<?
include("parts/adventages.php");
include("parts/recommends.php");
include("parts/search--form.php");
?>
<section class="about--desc">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12">
                <span class="section__suptitle">Немного</span>
                <h4 class="section__title">О компании</h4>
            </div>
            <div class="col-lg-4">
                <img src="img/images/thumb__document.jpg" width="416" height="590" alt="document">
                <span>Сертификат соответствия NSK на подшипники качения</span>
            </div>
            <div class="col-lg-7">
                <h4>Антей техно </h4>
                <p>На протяжении уже нескольких лет занимает лидирующие позиции среди компаний, занимающихся продажей в России импортных подшипников SKF, FAG, INА, обгонных муфт STIEBER, RINGSPANN, CTS, приводных ремней OPTIBELT, MEGADYNE, а также измерительного инструмента MITUTOYO и TESA.</p>
                <p>Помимо Северо-Западного региона, где расположен центральный офис компании, мы занимаемся продажей подшипников во все регионы России. Вы можете купить подшипники, находясь в любом городе от Москвы до Владивостока.</p>
                <p><b>Наша продукция</b></p>
                <ul>
                    <li>Импортные подшипники: подшипники SKF, FAG, INA, ISB, NSK, NKE, игольчатые роликоподшипники IKO, NBS, корпусные подшипники ASAHI, KDF;</li>
                    <li>Измерительный инструмент MITUTOYO, TESA, INTERAPID, ETALON, KAFER, PEAK, KROEPLIN (микрометры, штангенциркули, нутромеры, индикаторы, толщиномеры, лупы, увеличительные стекла, поверочные плиты и многое другое);</li>
                    <li>Обгонные муфты STIEBER, CTS, GMN, RINGSPANN;</li>
                    <li>Гидравлические компоненты - быстроразъемные соединения типа КАМЛОК, БРС для гидравлики, рукава высокого давления (РВД);</li>
                    <li>Приводные ремни OPTIBELT, MEGADYNE, CONTITECH;</li>
                    <li>Линейные направляющие THK, IKO, INA, HIWIN;</li>
                    <li>Конвейерные (транспортерные) ленты и плоские ремни HABASIT, MEGADYNE;</li>
                    <li>Приводные цепи (роликовые, зубчатые, пластинчатые);</li>
                    <li>Сальники и манжеты.</li>
                </ul>
                <a href="#" class="action__btn stroke">
                    О компании
                </a>
            </div>
        </div>
    </div>
</section>
<?
include("parts/brands.php");
include("parts/last--news.php");
include("parts/footer.php");
?>