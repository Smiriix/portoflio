<? require('elements/header.php') ?>
<section class="whishlist">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title">
                    отложенные товары
                </h4>
                <div class="whishlist__grid">
                    <? include('elements/product__card.php'); ?>
                    <? include('elements/product__card.php'); ?>
                    <? include('elements/product__card.php'); ?>
                    <? include('elements/product__card.php'); ?>
                    <? include('elements/product__card.php'); ?>
                    <? include('elements/product__card.php'); ?>
                </div>
                <a href="#" class="remont--price__download">Скачать реквизиты</a>
            </div>
        </div>
    </div>
</section>
<? require('elements/footer.php') ?>