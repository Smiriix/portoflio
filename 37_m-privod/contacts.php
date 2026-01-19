<?php require('header.php'); ?>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="contacts">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contacts__grid">
                    <div class="contacts__info">
                        <p class="contacts__caption">
                            Россия, Московская область, Люберцы, ул. Электрификации, д. 3, здание литера Д, 2-ой этаж, офис 6
                        </p>

                        <a href="#" class="contacts__mail">мск@tehprivod.ru</a>
                        <a href="#" class="contacts__phone">+7 495 120-77-43</a>
                        <a href="#" class="contacts__phone">8 800 500-77-43</a>
                        <a href="#" class="contacts__address">140004, Россия, Московская область, Люберцы, ул. Электрификации, д. 3, здание литера Д, 2-ой этаж, офис 6</a>
                    </div>
                    <div class="contacts__form">
                        <div class="contacts__form_title">
                            Заказать звонок
                        </div>
                        <form>
                            <span>
                                <input type="text" placeholder="ФИО">
                            </span>
                            <span>
                                <input type="text" placeholder="Телефон">
                            </span>
                            <span>
                                <input type="text" placeholder="Email">
                            </span>
                            <span>
                                <textarea placeholder="Комментарий к заказу"></textarea>
                            </span>
                            <label>
                                <span>
                                    <input type="checkbox">
                                </span>
                                Соглашаюсь с Политикой конфиденциальности и обработки персональных данных
                            </label>
                            <input type="submit" value="Заказать звонок" class="action__btn">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="map--wrapper">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div id="map"></div>
            </div>
        </div>
    </div>
</section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script>
    ymaps.ready(() => {
        var myMap = new ymaps.Map("map", {
            center: [0, 0],
            zoom: 17,
            controls: []
        });
        myMap.geoObjects.add(new ymaps.Placemark([0, 0], {}, {
            iconColor: "#bbd2a3"
        }));
    });
</script>


<?php require('subform.php'); ?>
<?php require('footer.php'); ?>