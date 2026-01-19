<footer class="footer">
    <div class="header__container">
        <div class="d-flex flex-column flex-lg-row align-items-start justify-content-between">
            <div class="footer__ul">
                <p class="footer__caption">Клиентам</p>
                <ul>
                    <li><a href="#">Я хочу</a></li>
                    <li><a href="#">Пациенту</a></li>
                    <li><a href="#">Прайс</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Вопросы и ответы</a></li>
                </ul>
            </div>
            <div class="footer__ul">
                <p class="footer__caption">Информация</p>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Специалисты</a></li>
                    <li><a href="#">Фотогалерея (до / после)</a></li>
                    <li><a href="#">Видеоблог</a></li>
                    <li><a href="#">NIKA блог</a></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                </ul>
            </div>
            <div class="footer__ul">
                <p class="footer__caption">Услуги</p>
                <ul class="footer__services">
                    <li><a href="#">Аппаратная косметология</a></li>
                    <li><a href="#">Фотоомоложение IPL Deka System</a></li>
                    <li><a href="#">Инъекционная косметология</a></li>
                    <li><a href="#">Нитевой лифтинг</a></li>
                    <li><a href="#">Ботулинотерапия</a></li>
                    <li><a href="#">Эстетическая косметология</a></li>
                    <li><a href="#">Все услуги</a></li>
                </ul>
            </div>
            <div class="footer__ul">
                <p class="footer__caption">Подписаться на рассылку</p>
                <form action="#">
                    <span><input type="text" placeholder="Эл. почта"></span>
                    <input type="submit" value="Подписаться">
                </form>
                <img src="/img/images/footer_img.jpg" width="416" height="117" alt="footer__banner" class="footer__banner">
            </div>
            <div class="footer__ul">
                <p class="footer__caption">Контакты</p>
                <p class="footer__subcaption">Телефон</p>
                <a href="" class="footer__data">8 800 000 36 35</a>
                <a href="" class="footer__feedback">Обратный звонок</a>
                <p class="footer__subcaption">Почта</p>
                <a href="" class="footer__data">12345@example.ru</a>
                <p class="footer__subcaption">Режим работы</p>
                <span class="footer__data">ежедневно с 9:00 до 21:00</span>
            </div>
        </div>
        <div class="footer__soc--wrapper d-flex flex-column align-items-center">
            <p class="footer__soc_caption">Мы в сети</p>
            <div class="footer__soc d-flex align-items-center justify-contnet-center">
                <a href="#" class="footer__soc_item"><img width='28' height="28" src="/img/icons/yt_icon.svg"></a>
                <a href="#" class="footer__soc_item"><img width='28' height="28" src="/img/icons/tg_icon.svg"></a>
                <a href="#" class="footer__soc_item"><img width='28' height="28" src="/img/icons/vk_icon.svg"></a>
                <a href="#" class="footer__soc_item"><img width='28' height="28" src="/img/icons/wa_icon.svg"></a>
            </div>
        </div>
        <div class="footer__bottom d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <a href="#" class="footer__logo">
                <img src="/img/logo/logo.svg" alt="logo" width="86" height="39" class="footer__logo_img">
            </a>
            <div class="footer__site_name">Косметология NIKA clinic</div>
            <div class="footer__pay">
                <img src="/img/images//method_1.jpg" alt="pay" class="footer__pay_item">
                <img src="/img/images//method_2.jpg" alt="pay" class="footer__pay_item">
                <img src="/img/images//method_3.jpg" alt="pay" class="footer__pay_item">
                <img src="/img/images//method_4.jpg" alt="pay" class="footer__pay_item">
                <img src="/img/images//method_5.jpg" alt="pay" class="footer__pay_item">
            </div>
        </div>
        <div class="footer__agrachoff d-flex align-items-center justify-content-center">
            <a href="https://agrachoff.ru" target="_blank">
                <img src="/img/images/agrachoff.svg" width="15" height="15" alt="agrachoff">
                Разработка и продвижение сайтов
            </a>
        </div>
    </div>
</footer>
<div class="modal--wrapper" id="modal__form">
    <div class="modal--wrapper__panel">
        <div class="modal--wrapper__close"></div>
        <p class="modal--wrapper__title">
            оставить заявку по <span>телефону</span>
        </p>
        <span class="modal--wrapper__suptitle">
            Оставьте заявку и наш администратор свяжется с Вами в течение 10 минут
        </span>
        <form action="#">
            <label><sup>*</sup>Ваше имя</label>
            <span><input type="text"></span>
            <label><sup>*</sup>Ваше телефон</label>
            <span><input type="text"></span>
            <input type="submit" value="Отправить" class="action__btn dark">
        </form>
    </div>
</div>
<div class="modal--wrapper" id="modal__feedback">
    <div class="modal--wrapper__panel">
        <div class="modal--wrapper__close"></div>
        <p class="modal--wrapper__title">
            оставить заявку по <span>телефону</span>
        </p>
        <div class="d-flex flex-column align-items-center modal--wrapper__feedback">
            <a href="#" class="action__btn green">
                Показать еще
            </a>
            <span class="modal--wrapper__suptitle">
                Мы перезвоним через 1 минуту!
            </span>
        </div>
        <span class="modal--wrapper__feedback_desc">Получите бесплатную консультацию через мессенджер</span>
        <div class="d-flex justify-content-center">
            <a href="#" class="action__btn wa">
                WhatsApp
            </a>
        </div>
    </div>
</div>
<!-- Scripts -->
<script src="js/jquery-3.6.1.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.fancybox.min.js"></script>
<script src="js/script.js"></script>
</body>

</html>