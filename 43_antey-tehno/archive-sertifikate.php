<? include("parts/header.php") ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Сертификаты</a></li>
                </ul>
                <h1 class="page--info__title">Сертификаты</h1>
            </div>
        </div>
    </div>
</section>
<section class="archive-sertifikates">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="archive-sertifikates__grid">
                    <?
                    for($i=0;$i<4;$i++){
                        include("parts/single--doc.php");
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
<? include("parts/search--form.php") ?>
<? include("parts/faq--list.php") ?>
<? include("parts/brands.php") ?>
<? include("parts/footer.php") ?>