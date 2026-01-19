<? include("components/header.php"); ?>
<section class="page--banner" style="background: linear-gradient(to right, #11141A 21%, #11141af2 26%, #0000 60%), url('img/images/banner__category.jpg') no-repeat center center / cover;">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="page--banner__title">
                    коллекция камня
                    <span>мрамор</span>
                </h1>
                <a href="#" class="section__btn fill">Заказать изделие</a>
            </div>
        </div>
    </div>
</section>
<section class="items--list fade__top">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title dark">
                    виды камня
                </h4>
                <div class="items--list__grid">
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                    <? include("components/catalog__item.php") ?>
                </div>
            </div>
        </div>
    </div>
</section>
<? include("components/we--ideas.php"); ?>
<? include("components/we-production.php"); ?>
<? include("components/footer.php"); ?>