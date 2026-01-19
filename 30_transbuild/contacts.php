<?php require("header.php") ?>
<section class="contacts">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h6>наши <p>контакты</p>
                </h6>
            </div>
            <div class="col-12 col-lg-1"></div>
            <div class="col-12 col-lg-5">
                <div class="d-flex flex-column align-items-start">
                    <a href="tel:88000000000" class="contacts__number">8 800 000 - 00 - 00</a>
                    <span class="contacts__link">
                        <span>What'sApp </span>
                        <a href="tel:+79000000000">+7 (900) 000-00-00</a>
                    </span>
                    <span class="contacts__link">
                        <span>E-mail: </span>
                        <a href="tel:info@info.ru">info@info.ru</a>
                    </span>
                    <div class="contacts__soc d-flex align-items-center justify-content-start">
                        <a href="#">
                            <img src="/img/icons/vk_icon_dark.svg" width="30" height="30" alt="soc-1">
                        </a>
                        <a href="#">
                            <img src="/img/icons/tg_icon_dark.svg" width="30" height="30" alt="soc-2">
                        </a>
                    </div>
                    <div class="action__btn white">скачать карта партнера</div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div id="map"></div>
            </div>
        </div>
    </div>
</section>
<section class="contacts--info">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contacts--info__grid">
                    <div class="contacts--info__item">
                        <p class="contacts--info__caption">Юридический адрес</p>
                        <span class="contacts--info__text">Россия, 400002, г. Москва,<br>
                        Мира ул., 23, офис 410</span>
                    </div>
                    <div class="contacts--info__item">
                        <p class="contacts--info__caption">Реквизиты</p>
                        <span class="contacts--info__text"><b>ОГРН</b> 123456789111<br>
                        <b>ИНН/КПП</b> 0000000000/00000000<br>
                        <b>ОКВЭД</b> 00,00</span>
                    </div>
                    <div class="contacts--info__item">
                        <p class="contacts--info__caption">Почтовый адрес</p>
                        <span class="contacts--info__text">Россия, 400002, г. Москва,<br>
                        Мира ул., 23, офис 410</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>
<script>
    ymaps.ready(()=>{
        var myMap = new ymaps.Map('map',{
            center: [0,0],
            zoom: 17,
            controls: []
        },{});
        myMap.geoObjects.add(new ymaps.Placemark([0,0],{},{}));
    });
</script>
<?php require("footer.php") ?>