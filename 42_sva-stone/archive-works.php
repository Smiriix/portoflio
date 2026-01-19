<? include("components/header.php") ?>
<section class="production--archive">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="section__title">
                    наши работы
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
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                    <? include('components/production__item.php'); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<? include("components/we--ideas.php") ?>
<? include("components/we-production.php") ?>
<? include("components/footer.php") ?>