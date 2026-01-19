<? include("parts/header.php"); ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Каталоги</a></li>
                </ul>
                <h1 class="page--info__title">Каталоги</h1>
            </div>
        </div>
    </div>
</section>
<section class="brands--catalog">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="brands--catalog__title">
                    Выберите бренд:
                </p>
                <div class="brands--catalog__tabs">
                    <?
                    for ($i = 0; $i < 12; $i++) :
                    ?>
                        <a href="#">
                            <img src="img/images/thumb__brand.jpg" width="196" height="85" alt="thumb">
                        </a>
                    <?
                    endfor;
                    ?>
                </div>
                <div class="brands--catalog__panels">
                    <div class="brands--catalog__panel">
                        <p class="brands--catalog__panel_name">
                            Каталог бренда <span>SKF</span>
                        </p>
                        <div class="brands--catalog__panel_grid">
                            <?
                            for ($i = 0; $i < 8; $i++) :
                            ?>
                                <a href='' class="brands--catalog__item">
                                    <img src="img/images/thumb__brand_catalog.jpg" alt="хз" width="153" height="217" class="brands--catalog__item_thumb">
                                    <span class="brands--catalog__item_name">Общие каталоги</span>
                                </a>
                            <?
                            endfor;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?
include("parts/brands.php");
include("parts/last--news.php");
?>
<? include("parts/footer.php"); ?>