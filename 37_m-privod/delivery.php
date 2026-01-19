<?php require("header.php"); ?>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Доставка</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="delivery">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section__title">
                    Доставка
                </div>
            </div>
            <div class="col-lg-5">
                <div class="delivery__caption">
                    <img src="img/icons/pick_orange.png" width="50" height="50" alt="delivery" class="delivery__caption_icon">
                    Самовывоз
                </div>
                <div class="delivery__text">
                    <p>Самовывоз осуществляется из нашего офиса по адресу:</p>
                    <ul>
                        <li>г. Москва, Огородный проезд, д. 5, стр. 6, офис 501 в Москве</li>
                        <li>Санкт-Петербург, наб. реки Волковки, д. 7, БЦ «Иволга», офис 306–3</li>
                        <li>г. Ростов-на-Дону, Беломорский пер., 98, офис 101</li>
                        <li>г. Екатеринбург, ул. Фронтовых бригад, 18б, офис 215</li>
                        <li>г. Минск, пр. Независимости, д. 164</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6">
                <div class="delivery__caption">
                    <img src="img/icons/delivery_orange.png" width="50" height="50" alt="delivery" class="delivery__caption_icon">
                    Доставка по всем регионам
                </div>
                <div class="delivery__text">
                    <p>Мы осуществляем доставку по регионам России, а также берём на себя организацию, подготовку, упаковку и хранение груза. Доставка реализуется нашими партнёрами. Для расчёта стоимости важно знать вес, габариты и необходимые сроки получения.</p>
                    <p>Уточняйте подробности у вашего менеджера.</p>
                    <p>Заказы отгружаются в будние дни с центрального склада в Москве. Сроки отгрузки — 1-3 рабочих дня с момента оплаты. Заказ должен быть предварительно согласован с менеджером компании ООО «M-ПРИВОД».</p>
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
        myMap.geoObjects.add(new ymaps.Placemark([0,0],{},{iconColor: "#bbd2a3"}));
    });
</script>
<?php require("subform.php"); ?>
<?php require("footer.php"); ?>