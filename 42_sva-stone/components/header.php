<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVA Stone</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/swiper-bundle.min.css">

    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/logo/favicon.png">
</head>

<body>
    <div class="modalwindow" id='priceservice'>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="modalwindow__wrapper">
                        <div class="modalwindow__close"></div>
                        <div class="modalwindow__panel">
                            <h4 class="modalwindow__title">
                                рассчитать<br>
                                цену на услугу
                            </h4>
                            <span class="modalwindow__desc">
                                Оставьте заявку и наши менеджеры сделают
                                <b>бесплатный</b> расчет по вашим размерам
                            </span>
                            <form>
                                <span><input type="text" class="name" placeholder="Ваше имя" required></span>
                                <span><input type="text" class="phone" placeholder="+7(___)___-__-__" required></span>
                                <span>
                                    <select required>
                                        <option value="">Выберите услугу</option>
                                    </select>
                                </span>
                                <span><input type="text" placeholder="Введите адрес" required></span>
                                <span><input type="date" required></span>
                                <label>
                                    <input type="checkbox" required>
                                    <span>
                                        Принимаю <a href="#">условия обработки</a> персональных данных
                                    </span>
                                </label>
                                <input type="submit" value="Оставить заявку">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="socials--fix">
        <a href="#" style="mask-image: url('/img/icons/whatsapp.svg');"></a>
        <a href="#" style="mask-image: url('/img/icons/telegram.svg');"></a>
        <a href="#" style="mask-image: url('/img/icons/youtube.svg');"></a>
    </div>
    <a href="#priceservice" class="feedback--btn showmodal">
    </a>
    <header class="header">
        <div class="header__container">
            <div class="header__left">
                <div class="header__sidemenu_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header__sidemenu">
                    <div class="header__sidemenu_wrapper">
                        <p class="header__sidemenu_caption footer__caption">
                            меню
                        </p>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Услуги</a></li>
                            <li>
                                <a href="#">Готовые изделия</a>
                                <ul>
                                    <li><a href="#">Подоконники</a></li>
                                    <li><a href="#">Столешницы</a></li>
                                    <li><a href="#">Ступени в дом</a></li>
                                    <li><a href="#">Камины</a></li>
                                    <li><a href="#">Уличные ступени</a></li>
                                    <li><a href="#">Садовые накрывки</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Каталог камней</a></li>
                            <li><a href="#">Прайс</a></li>
                            <li><a href="#">Портфолио</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Установка</a></li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                        <div class="footer__ul">
                            <p class="footer__caption">Рассчитать</p>
                            <a href="#" class="footer__btn">Стоимость услуги</a>
                            <a href="#" class="footer__btn">Стоимость доставки</a>
                            <a href="#" class="footer__btn">Стоимость установки</a>
                        </div>
                        <div class="footer__ul">
                            <p class="footer__caption">Контактные данные</p>
                            <a href="#" class="footer__phone">+7 800 123-00-00</a>
                            <div class="footer__socials">
                                <a href="#" class="footer__socials_item">
                                    <img src="img/icons/whatsapp.svg" width="30" height="30" alt="whatsapp">
                                </a>
                                <a href="#" class="footer__socials_item">
                                    <img src="img/icons/telegram.svg" width="30" height="30" alt="teleagram">
                                </a>
                                <a href="#" class="footer__socials_item">
                                    <img src="img/icons/youtube.svg" width="30" height="30" alt="youtube">
                                </a>
                            </div>
                            <a href="#" class="footer__address">
                                Москва, Мира 23
                            </a>
                        </div>
                    </div>
                </div>
                <ul class="header__menu">
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Каталог камней</a></li>
                    <li><a href="#">Готовые изделия</a></li>
                </ul>
            </div>
            <a href="#" class="header__logo">
                <img src="img/logo/logo.svg" width="209" height="53" alt="logo" class="header__logo_img">
            </a>
            <div class="header__right">
                <a href="#" class="header__address">
                    Москва, Мира 23
                </a>
                <a href="#" class="header__phone">
                    +7 800 123-00-00
                </a>
                <a href="#priceservice" class="header__phone--icon showmodal">
                </a>
                <label class="header__lang_wrapper">
                    <select class="header__lang">
                        <option value="">Ru</option>
                        <option value="En">En</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="header__mobile--panel d-lg-none">
            <a href="#" class="catalog">Каталог камней</a>
            <div id="menuBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#feedback" class="phone showmodal">Обратная связь</a>
        </div>
    </header>