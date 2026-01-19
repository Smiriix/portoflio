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
                <div class="brands--catalog__panels" style="margin-top: 0">
                    <div class="brands--catalog__panel">
                        <div class="brands--catalog__panel_grid">
                            <?
                            for ($i = 0; $i < 8; $i++) :
                            ?>
                                <a href='' class="brands--catalog__item">
                                    <img src="img/images/thumb__brand_catalog.jpg" alt="хз" width="153" height="217" class="brands--catalog__item_thumb">
                                    <span class="brands--catalog__item_name"><b>ISB Русский, 9.78 Mb</b></span>
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