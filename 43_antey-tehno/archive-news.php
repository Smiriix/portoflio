<?
include("parts/header.php");
?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Новости</a></li>
                </ul>
                <h1 class="page--info__title">Новости</h1>
            </div>
        </div>
    </div>
</section>
<section class="archive--news">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="archive--news__grid">
                    <?
                    for ($i = 0; $i < 12; $i++) :
                    ?>
                        <? include("parts/single--news.php") ?>
                    <?
                    endfor;
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
<?
include("parts/footer.php");
?>