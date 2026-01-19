<? include("components/header.php"); ?>
<section class="contacts">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title">
                наши Контакты
                </h4>
                <div class="contacts__wrapper">
                    <div id="map" class="contacts__map"></div>
                    <div class="contacts__data">
                        <a href="#" class="contacts__address">
                        РОССИЯ, <br>
                        Г. САНКТ-ПЕТЕРБУРГ,УЛ. ГРАФТИО, Д.3
                        </a>
                        <div class="contacts__data_str d-flex align-items-center justify-content-between">
                            <p>ЧАСЫ РАБОТЫ:</p>
                            <span>
                                <span class="d-block">ПН-ПТ</span>
                                С 10:00 ДО 19:00
                            </span>
                        </div>
                        <div class="contacts__data_str d-flex align-items-center justify-content-between">
                            <p>ТЕЛЕФОН:</p>
                            <a href="tel:+78001230000">+7 800 123-00-00</a>
                        </div>
                        <div class="contacts__data_str d-flex align-items-center justify-content-between">
                            <p>E-MAIL:</p>
                            <a href="mailto:info@info.COM">info@info.COM</a>
                        </div>
                        <a href="#" class="contacts__btn">
                            Оставить заявку
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src='https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU'></script>
<script>
    ymaps.ready(()=>{
        var myMap = new ymaps.Map("map",{
            center: [59.973987, 30.306445],
            zoom: 17,
            controls: []
        })
        myMap.geoObjects.add(new ymaps.Placemark([59.973987, 30.306445], {}, {iconColor: '#d1ae6f'}));
    });
</script>
<? include("components/footer.php"); ?>