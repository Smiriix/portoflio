<section class="rekvizits">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="rekvizits__map" id='rekvizit_map'></div>
            </div>
            <div class="col-lg-6">
                <p>Контакты для прессы</p>
                <span>Благодарим Вас за интерес к нашей компании. Мы всегда готовы к сотрудничеству. Будем рады предоставить информацию о компании, организовать интервью и комментарии экспертов.</span>
                <br>
                <br>
                <p>Реквизиты:</p>
                <span>
                    <b>Наименование организации</b> - Антей Техно<br>
                    Юридический адрес компании - 105094, г. Москва, ул. Золотая, д. 11, стр. 2, оф. 238<br><br>
                    <b>ИНН -</b> 000000000<br>
                    <b>ОГРН -</b> 00000000000<br>
                    <b>БИК -</b> 00000000000<br>
                    <br>
                    <b>Для связи -</b> <a href="#">+7 (499) 499-01-42</a>, <a href="mailto:anteytehno@mail.ru">anteytehno@mail.ru</a>
                </span>
            </div>
        </div>
    </div>
</section>
<script src='https://api-maps.yandex.ru/2.0-stable/?apikey=ваш API-ключ&load=package.standard&lang=ru-RU'></script>
<script>
    ymaps.ready(()=>{
        var myMap = new ymaps.Map("rekvizit_map",{
            center: [55.922383, 37.514275],
            zoom: 17,
            controls: []
        });
        myMap.geoObjects.add(new ymaps.Placemark([55.922383, 37.514275], {}, {iconColor: "#f0f"}));
    });
</script>