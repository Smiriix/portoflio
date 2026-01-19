<? include("parts/header.php"); ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О компании</a></li>
                </ul>
                <h1 class="page--info__title">О компании</h1>
            </div>
        </div>
    </div>
</section>
<section class="about--wrapper">
    <div class="container">
        <div class="row flex-column-reverse flex-lg-row align-items-center justify-content-between flex-column flex-lg-row">
            <div class="col-lg-7">
                <h2>Антей Техно</h2>
                <p>В многообразии сборочных узлов особое положение занимают те, которые способны воспринимать и осевую нагрузку, и направленную снаружи. В статье поговорим про радиально-упорные подшипники качения – шариковые и роликовые, представим размеры в виде таблиц, а также посмотрим чертежи и фото.</p>
                <p>Элемент служит для придания движения вращения одних частей системы, в то время как сердцевина (обычно это вал) остается неподвижной. Можно достигать высоких оборотов и скорости, а также увеличить сопротивляемость давлению и силе трения, если правильно эксплуатировать запчасть. Конструктивно механизм прост и состоит из:</p>
                <a href="#" class="action__btn">Заказать звонок</a>
            </div>
            <div class="col-lg-4">
                <img src="img/logo/logo.png" width="416" height="106" alt="logo">
            </div>
        </div>
    </div>
</section>
<?
include("parts/adventages.php");
?>
<section class="we--command">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <h3>
                    Наша команда
                </h3>
                <h4>Профессионалы, которые работают у нас</h4>
                <p>
                    дистрибьютор, который успешно совмещает компетенцию поставщика и опорного партнера для компаний различных сфер промышленности и народного хозяйства России и стран ближнего зарубежья на протяжении многих лет. У нас вы найдете огромный выбор подшипников, различных сопутствующих товаров и резинотехнических изделий.
                </p>
                <a href="#" class="action__btn stroke">
                    Подробнее
                </a>
            </div>
            <div class="col-lg-7">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <?
                        for ($i = 0; $i < 8; $i++) :
                        ?>
                            <div class="swiper-slide">
                                <? include("parts/single--command.php") ?>
                            </div>
                        <?
                        endfor;
                        ?>
                    </div>
                </div>
                <div class="we--command__arrow">
                    <span class="we--command__arrow_prev"></span>
                    <span class="we--command__arrow_next"></span>
                </div>
            </div>
        </div>
    </div>
</section>
<? include("parts/search--form.php"); ?>
<? include("parts/faq--list.php"); ?>
<? include("parts/brands.php"); ?>
<? include("parts/footer.php"); ?>