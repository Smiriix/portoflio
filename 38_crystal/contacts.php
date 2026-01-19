<?php require("header.php"); ?>
<section class="banner fade-white-bottom" style='background: linear-gradient(to right, #F2F8F9 0%, #F2F8F9 51%, #0000 51%), url("../img/images/white__fade_left.png") no-repeat center left 53.4% / contain, url("../img/images/catalog__img.png") no-repeat center right / 50%'>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <ul class="breadcrumbs">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Новости</a></li>
                </ul>
                <h1>Наши контакты</h1>
                <div class="banner__desc">
                    Мы изготавливаем панель-кронштейны (консоли) всех видов.
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contacts">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contacts__grid">
                    <div class="contacts__item">
                        <img src="img/icons/mappoint__red.svg" width="60" height="60" alt="thumb" class="contacts__item_icon">
                        <div class="contacts__item_data">
                            <p class="contacts__item_caption">
                                Адрес:
                            </p>
                            <span>192019, Санкт-Петербург, ул. Профессора Качалова, 9Л</span>
                        </div>
                    </div>
                    <div class="contacts__item">
                        <img src="img/icons/mail__red.svg" width="60" height="60" alt="thumb" class="contacts__item_icon">
                        <div class="contacts__item_data">
                            <p class="contacts__item_caption">
                                Email
                            </p>
                            <a href='#'>f-sogl@yandex.ru</a>
                        </div>
                    </div>
                    <div class="contacts__item">
                        <img src="img/icons/phone__red.svg" width="60" height="60" alt="thumb" class="contacts__item_icon">
                        <div class="contacts__item_data">
                            <p class="contacts__item_caption">
                                Телефон
                            </p>
                            <ul>
                                <li><a href="#">+7 812 980 60 34</a></li>
                                <li><a href="#">+7 953 179 25 34</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="contacts__form">
                    <h4>Связаться с нами</h4>
                    <div class="contacts__form--grid">
                        <div id="map" class="contacts__form_map"></div>
                        <form>
                            <span><input type="text" placeholder="Ваше имя"></span>
                            <span><input type="text" placeholder="+7(___)___-__-__"></span>
                            <span><textarea placeholder="Ваши пожелания"></textarea></span>
                            <label>
                                <span><input type="checkbox" name="" id=""></span>
                                Вы даете согласие на обработку персональных данных
                            </label>
                            <input type="submit" value="Отправить" class="action__btn">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>
<script>
ymaps.ready(()=>{
    var myMap = new ymaps.Map("map",{
        center: [0, 0],
        zoom: 17,
        controls: []
    });
    myMap.geoObjects.add(new ymaps.Placemark([0,0],{},{iconColor: 'red'}));
});
</script>

<?php require("footer.php"); ?>