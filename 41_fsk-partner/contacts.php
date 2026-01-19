<? require('elements/header.php') ?>
<section class="information--banner">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="information--banner__wrapper" style="background: linear-gradient(to right, #f4f4f4 50%, #fff9 60%), url('img/images/banner__information.webp') no-repeat center right / 70% auto">
                    <ul class="breadcrumbs__list">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <h1 class="information--banner__title" style="margin: auto 0;">
                        Наши контакты
                    </h1>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contacts--wrapper">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">&nbsp;</div>
            <div class="col-lg-8">
                <div class="contacts--wrapper__address_grid">
                    <a href="#" class="contacts--wrapper__address_item">
                        <span>
                            <span class="contacts--wrapper__address_item--caption">Адрес:</span>
                            <span class="contacts--wrapper__address_item--value">Москва, Мира 23 корп.2</span>
                        </span>
                    </a>
                    <a href="#" class="contacts--wrapper__address_item">
                        <span>
                            <span class="contacts--wrapper__address_item--caption">Адрес:</span>
                            <span class="contacts--wrapper__address_item--value">Москва, Мира 23 корп.2</span>
                        </span>
                    </a>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="contacts--wrapper__grid">
                    <div class="contacts--wrapper__info phones">
                        <div class="contacts--wrapper__info_data">
                            <p class="contacts--wrapper__caption">Телефон</p>
                            <span>Отдел оптовых продаж</span>
                            <span><a href="#"><b>8(800) 000-00-00</b></a></span>
                            <span><a href="#">7(700) 000-00-00</a></span>
                            <span>E-mail: <a href="#"> office@sk-postavka.ru</a></span>
                        </div>
                    </div>
                    <div class="contacts--wrapper__info clock">
                        <div class="contacts--wrapper__info_data">
                            <p class="contacts--wrapper__caption">Наш график работы:</p>
                            <span>Пн-пт</span>
                            <span><b>09.00 - 17.00</b></span>
                            <span>суббота и воскресение ВЫХОДНЫЕ ДНИ</span>
                        </div>
                    </div>
                    <div class="contacts--wrapper__map" id="map"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>
<script>
    ymaps.ready(() => {
        var myMap = new ymaps.Map("map", {
            center: [55.779155, 37.631936],
            zoom: 17,
            controls: []
        });
        myMap.geoObjects.add(new ymaps.Placemark([55.779155, 37.631936], {}, {
            iconColor: '#00ad3b'
        }));
        myMap.geoObjects.add(new ymaps.Placemark([0, 0], {}, {
            iconColor: '#00ad3b'
        }));
    });
</script>
<section class="personal">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="personal__grid">
                    <div class="personal__item">
                        <p class="personal__item_name">Мирина</p>
                        <span class="personal__item_post">Руководитель отдела оптовых продаж</span>
                        <a href="#" class="personal__item_href">8(800)000-00-00</a>
                    </div>
                    <div class="personal__item">
                        <p class="personal__item_name">Мирина</p>
                        <span class="personal__item_post">Менеджер отдела продаж</span>
                        <a href="#" class="personal__item_href">8(800)000-00-00</a>
                    </div>
                    <div class="personal__item">
                        <p class="personal__item_name">Мирина</p>
                        <span class="personal__item_post">Отдел Логистики</span>
                        <a href="#" class="personal__item_href">8(800)000-00-00</a>
                    </div>
                    <div class="personal__item">
                        <p class="personal__item_name">Мирина</p>
                        <span class="personal__item_post">Руководитель отдела оптовых продаж</span>
                        <a href="#" class="personal__item_href">8(800)000-00-00</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="rekvizits">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img src="img/images/rekvizits.webp" width="635" height="212" alt="rekvizits" class="rekvizits__img">
            </div>
            <div class="col-lg-6">
                <h4 class="rekvizits__title">
                    Реквизиты компании:
                </h4>
                <div class="rekvizits__text">
                    Группа компаний "ФСК "ПАРТНЕР" Строй Комплект Поставка<br>
                    <b>ИНН</b> 9999999999 <br>
                    <b>КПП</b> 888888888 <br>
                    <b>ОГРН:</b> 7777777777777 <br>
                    <b>Юридический адрес:</b> 666666, г. Санкт-Петербург, Софийская ул., д. 59, корп. 2, стр. 1, пом. 44 <br>
                    <b>Фактический адрес:</b> 666666, г. Санкт-Петербург, пр. Энгельса, д. 157, лит. А <br>
                    <b>р/с:</b> 89898989898989989898989 <br>
                    Банк Северо-Западный банк ПАО «СБЕРБАНК»
                </div>
            </div>
            <div class="col-12">
                <a href="#" class="remont--price__download">Скачать реквизиты</a>
            </div>
        </div>
    </div>
</section>
<? require('elements/footer.php') ?>