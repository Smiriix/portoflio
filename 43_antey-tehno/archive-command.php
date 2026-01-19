<? include("parts/header.php") ?>
<section class="page--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumb">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Сотрудники</a></li>
                </ul>
                <h1 class="page--info__title">Сотрудники</h1>
            </div>
        </div>
    </div>
</section>
<section class="archive--command">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="archive--command__caption">
                    Профессионалы, которые работают у нас
                </p>
                <span class="archive--command__desc">
                    дистрибьютор, который успешно совмещает компетенцию поставщика и опорного партнера для компаний различных сфер промышленности и народного хозяйства России и стран ближнего зарубежья на протяжении многих лет. У нас вы найдете огромный выбор подшипников, различных сопутствующих товаров и резинотехнических изделий.
                </span>
                <?
                for ($k=0; $k < 3; $k++):
                ?>
                    <p class="archive--command__caption">
                        Отдел продаж
                    </p>
                    <div class="archive--command__grid">
                        <?
                        for ($i = 0; $i < 8; $i++) {
                            include("parts/single--command.php");
                        }
                        ?>
                    </div>
                <?
                endfor;
                ?>
            </div>
        </div>
    </div>
</section>
<? include("parts/search--form.php") ?>
<? include("parts/faq--list.php") ?>
<? include("parts/brands.php") ?>
<? include("parts/footer.php") ?>