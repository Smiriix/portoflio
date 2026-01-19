<?php require("header.php"); ?>
<section class="banner contacts">
    <div class="header__container">
        <div class="banner__slider_item">
            <img src="/img/images/single_services_banner.jpg" width="1620" height="480" alt="banner_slide" class="banner__slider_item--img">
            <div class="banner__slider_item--data">
                <div class="d-flex flex-column align-items-center">
                    <p class="banner__slider_item--title">Записаться на прием</p>
                    <span class="banner__slider_item--suptitle">Телефон по Москве и МО</span>
                    <div class="d-flex banner__feedback align-items-center justify-content-between w-100">
                        <a href="#" class="action__btn">8 800 000 36 35</a>
                        <a href="#" class="action__btn green">Обратный звонок</a>
                    </div>
                    <span class="banner__slider_desc">
                        Мы перезвоним через 1 минуту!
                    </span>
                    <span class="banner__slider_item--suptitle">Получите бесплатную консультацию через<br>мессенджер</span>
                    <a href="#" class="action__btn wa">
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul>
                    <li><a href='#'>Главная</a></li>
                    <li><a href='#'>Контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="single--service__price contacts">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <h5 class="section__title">
                        Контакты
                    </h5>
                    <p class="section__suptitle">
                        График работы
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <table>
                    <tr>
                        <td><b>Понедельник</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Вторник</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Среда</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Четверг</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Пятница</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Суббота</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td><b>Воскресенье</b></td>
                        <td>09:00 до 21:00</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>
<section id="map"></section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>
<script>
    ymaps.ready(()=>{
        var myMap = new ymaps.Map('map',{
            center: [0, 0],
            zoom: 17,
            controls: []
        },{});
        myMap.geoObjects.add(new ymaps.Placemark([0,0], {}, {iconColor: '#96B776'}));
    });
</script>
<?php require("footer.php"); ?>