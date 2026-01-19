<? include("components/header.php") ?>
<div class="modalwindow">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="modalwindow__production">
                        <div class="modalwindow__close"></div>
                    <div class="modalwindow__service_images">
                        <img src="img/images/item__thumb.jpg" width="846" height="628" alt="service_name" class="modalwindow__service_img">
                        <div class="modalwindow__service_images--mini">
                            <span class="active"><img src="img/images/item__thumb.jpg" width="80" height="60" alt='mini'></span>
                            <span><img src="img/images/item__thumb.jpg" width="80" height="60" alt='mini'></span>
                            <span><img src="img/images/item__thumb.jpg" width="80" height="60" alt='mini'></span>
                            <span><img src="img/images/item__thumb.jpg" width="80" height="60" alt='mini'></span>
                        </div>
                    </div>
                    <div class="modalwindow__production_data">
                        <h2 class="modalwindow__production_name">
                            Каминная облицовка Анжелика
                        </h2>
                        <span class="modalwindow__production_desc">
                        Прекрасный выбор для тех, кто ценит элегантность и высокое качество
                        </span>
                        <b class="modalwindow__production_ul--title">
                            Характеристики
                        </b>
                        <ul>
                            <li><span>Материалы</span><b>Мрамор</b></li>
                            <li><span>Габариты: В/Ш/Г, мм</span><b>1549 / 1609 / 869</b></li>
                            <li><span>Тип расположения</span><b>Пристенный</b></li>
                            <li><span>Стиль</span><b>Модерн</b></li>
                        </ul>
                        <p class="modalwindow__production_price">260 000₽</p>
                        <a href="#" class="modalwindow__production_btn">
                        Оставить заявку
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="production--archive">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="section__title">
                    Готовые изделия
                </h1>
                <div class="production--archive__tabs">
                    <a href="#" class="production--archive__tab active">Все</a>
                    <a href="#" class="production--archive__tab">Подоконники</a>
                    <a href="#" class="production--archive__tab">Столешницы</a>
                    <a href="#" class="production--archive__tab">Ступени в дом</a>
                    <a href="#" class="production--archive__tab">Камины</a>
                    <a href="#" class="production--archive__tab">Уличные ступени</a>
                    <a href="#" class="production--archive__tab">Садовые накрывки</a>
                </div>
                <div class="production--archive__grid">
                    <?
                    for ($i = 0; $i < 8; $i++) :
                    ?>
                        <? include('components/production__item.php'); ?>
                    <?
                    endfor;
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
<? include("components/we--ideas.php") ?>
<? include("components/we-production.php") ?>
<? include("components/footer.php") ?>