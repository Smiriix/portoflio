<?php require("header.php") ?>
<section class="banner" style="background: linear-gradient(to right, #F2F2F2 50%, #F2F2F200), url(/img/images/banner_img_1.png) no-repeat center right / contain;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="banner__data">
                    <ul class="breadcrumbs">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <h1><span>наши</span> контакты</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contacts--wrapper">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contacts--wrapper__grid">
                    <div class="contacts--wrapper__item">
                        <img src="/img/icons/mappoint_contacts.svg" width="60" height="60" alt="mappoint" class="contacts--wrapper__item_icon">
                        <div class="contacts--wrapper__item_data">
                            <p class="contacts--wrapper__item_caption">Адрес:</p>
                            <span class="contacts--wrapper__item_address">Московская область г. Химки, ул. Заводская, дом 2А</span>
                            <span class="contacts--wrapper__item_address">г. Москва, улица правды дом 2а</span>
                        </div>
                    </div>
                    <div class="contacts--wrapper__item">
                        <img src="/img/icons/mail_contacts.svg" width="60" height="60" alt="mail" class="contacts--wrapper__item_icon">
                        <div class="contacts--wrapper__item_data">
                            <p class="contacts--wrapper__item_caption">Email</p>
                            <a href="#" class="contacts--wrapper__item_mail">info@mail.ru</a>
                        </div>
                    </div>
                    <div class="contacts--wrapper__item">
                        <img src="/img/icons/phone_contacts.svg" width="60" height="60" alt="phone" class="contacts--wrapper__item_icon">
                        <div class="contacts--wrapper__item_data">
                            <p class="contacts--wrapper__item_caption">Телефон</p>
                            <a href="#" class="contacts--wrapper__item_phone">+7(777)777-77-77</a>
                            <a href="#" class="contacts--wrapper__item_phone">+7(777)777-77-77</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="section__title">
                    Связаться с нами
                </div>
            </div>
            <div class="col-lg-4 contacts--wrapper__info">
                <p><b>ИНН:</b> 000000000000</p>
                <p><b>ОГРНИП:</b> 0000000000000</p>
                <p><b>Расчетный счет:</b> 0000000000000000</p>
                <p><b>Банк:</b> ПАО Сбербанк</p>
                <p><b>БИК:</b> 000000000</p>
                <p><b>Корр. счет:</b> 00000000000000000225</p>
                <p><b>Адрес:</b> г. Мосува, 4-я Новокузминская, д. 9, к. 2, кв. 168</p>
                <p><b>Телефон:</b> <a href="#">+7(777)777-77-77</a></p>
                <p><b>Свидетельство:</b> 1111111111 от 26.11.2021</p>
            </div>
            <div class="col-lg-8">
                <form>
                    <input type="text" placeholder="Ваше имя">
                    <input type="text" placeholder="+7(___)___-__-__">
                    <textarea placeholder="Ваши пожелания"></textarea>
                    <label>
                        <input type="checkbox">
                        Вы даете согласие на обработку персональных данных
                    </label>
                    <input type="submit" value="Отправить" class="action__btn">
                </form>
            </div>
        </div>
    </div>
</section>
<section class="contacts--map">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="contacts--map__list">
                    <input id='contacts--map__toggler' hidden type="checkbox" checked>
                    <label class="contacts--map__toggler" for="contacts--map__toggler">
                        Наши магазины
                    </label>
                    <ul class="contacts--map__list--wrapper">
                        <li data-coords='0,0'>Центральный склад:
                            <span>г. Химки, ул. Заводская, дом 2А</span>
                        </li>
                        <li data-coords='0,0'>Магазин:
                            <span>г. Москва, улица правды дом 2а</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="contacts--map__wrapper" id="map"></div>
</section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
<script>
    ymaps.ready(()=>{
        var myMap = new ymaps.Map("map",{
            center: [0, 0],
            zoom: 17,
            controls: []
        });
        myMap.geoObjects.add(new ymaps.Placemark([0, 0],{},{ iconColor: '#70be42' }));
    });
</script>
<?php require("footer.php") ?>