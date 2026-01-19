<? include("parts/header.php") ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Документы</a></li>
                </ul>
                <h1 class="page--info__title">Документы</h1>
            </div>
        </div>
    </div>
</section>
<section class="archive-documents">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="archive-documents__slider">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?
                            for ($i = 0; $i < 4; $i++) :
                            ?>
                                <div class="swiper-slide">
                                    <? include("parts/single--doc.php"); ?>
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
            </div>
        </div>
    </div>
</section>
<? include("parts/rekvizits.php"); ?>
<?
include("parts/search--form.php");
include("parts/faq--list.php");
include("parts/brands.php");
?>
<? include("parts/footer.php") ?>