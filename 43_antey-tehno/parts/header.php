<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Антей Техно</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/swiper.css">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="modalwindow" id='feedback'>
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <h4>Заказать звонок</h4>
            <form>
                <span>
                    Ваше имя<span style="color: red">*</span>
                    <input type="text" placeholder="Ваше имя">
                </span>
                <span>
                    Ваш телефон<span style="color: red">*</span>
                    <input type="text" placeholder="+7(___) ___-____">
                </span>
                <span>
                    Название компании
                    <input type="text" placeholder="Название компании">
                </span>
                <label>
                    Нажимая кнопку «оформить заказ», вы даете согласие на обработку персональных данных
                </label>
                <input type="submit" class="action__btn" value="Заказать звонок">
            </form>
        </div>
    </div>
    <div class="modalwindow" id='search'>
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <h4>Поиск</h4>
            <form>
                <span>
                    <input type="text" placeholder="Найти товар">
                </span>
                <input type="submit" class="action__btn" value="Заказать звонок">
            </form>
        </div>
    </div>
    <div class="header__top">
        <div class="header__container d-flex align-items-center justify-content-between">
            <span class="header__location">
                <span>Ваш город: <a href="#">Краснодар</a></span>
            </span>
            <span class="header__address">
                <b>
                    Офис/Склад:
                </b>
                Московская область, г. Долгопрудный, Лихачевский
                проезд, дом 4, стр.1, пом. 4. ; г. Ставрополь
            </span>
            <div class="header__top_socials">
                <a href="#">
                    <img src="img/icons/soc_vk.svg" width="32" height="32" alt="vk">
                </a>
                <a href="#">
                    <img src="img/icons/soc_google.svg" width="32" height="32" alt="google">
                </a>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="header__middle">
            <div class="header__container d-flex justify-content-between align-items-center">
                <a href="/" class="header__logo">
                    <img src="img/logo/logo.png" width="196" height="50" alt="logo">
                </a>
                <form class="header__search">
                    <input type="text" placeholder="Поиск по названию, бренду, артикулу">
                    <input type="submit" value="Найти">
                </form>
                <a href="#feedback" class="header__feedback action__btn">
                    Заказать звонок
                </a>
                <div class="header__data">
                    <a href="#" class="header__data_phone">8 (499) 499-01-42</a>
                    <span>Email: <a href="#" class="header__data_email">anteytehno@mail.ru</a></span>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="header__container d-flex align-items-center justify-content-between">
                <ul class="header__nav">
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Бренды</a></li>
                    <li><a href="#">Каталоги</a></li>
                    <li><a href="#">Новости</a></li>
                    <li>
                        <a href="#">О компании</a>
                        <ul>
                            <li><a href="#">Документы</a></li>
                            <li><a href="#">Сертификаты</a></li>
                            <li><a href="#">Сотрудники</a></li>
                            <li><a href="#">Миссия</a></li>
                            <li><a href="#">Доставка и оплата</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <a href='#' class="header__cart">
                    <span class="header__cart_count">5</span>
                    <span class="header__cart_price">11 787₽</span>
                </a>
            </div>
        </div>
        <div class="header__mobile_top d-lg-none">
            <span class="header__location">
                <span>Ваш город: <a href="#">Краснодар</a></span>
            </span>
            <a href="/" class="header__logo">
                <img src="img/logo/logo.png" width="142" height="36" alt="logo">
            </a>
            <a href="#search" class="header__mobile_search"></a>
        </div>
        <div class="header__mobile_middle d-lg-none">
            <p>меню</p>
            <ul>
                <li>
                    <a href="#">Каталог</a>
                    <ul>
                        <li><a href="#">Подшипники</a></li>
                        <li><a href="#">Приводные цепи</a></li>
                        <li><a href="#">Приводные ремни</a></li>
                        <li><a href="#">Обгонные муфты</a></li>
                        <li><a href="#">Манжеты стандартные и под заказ</a></li>
                        <li><a href="#">Промышленные редуктора</a></li>
                        <li><a href="#">Пневматика и гидравлика</a></li>
                    </ul>
                </li>
                <li><a href="#">Бренды</a></li>
                <li><a href="#">Каталоги</a></li>
                <li><a href="#">Новости</a></li>
                <li>
                    <a href="#">О компании</a>
                    <ul>
                        <li><a href="#">Документы</a></li>
                        <li><a href="#">Сертификаты</a></li>
                        <li><a href="#">Сотрудники</a></li>
                        <li><a href="#">Миссия</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                    </ul>
                </li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div class="header__data">
                <a href="#" class="header__data_phone">8 (499) 499-01-42</a>
                <span>Email: <a href="#" class="header__data_email">anteytehno@mail.ru</a></span>
            </div>
        </div>
        <div class="header__mobile_bottom d-lg-none">
            <a href="#" class="header__mobile_link catalog">Каталог</a>
            <a href="#" class="header__mobile_link whatsapp">WhatsApp</a>
            <div id="menuBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#feedback" class="header__mobile_link phone">Заказать звонок</a>
            <a href="#" class="header__mobile_link cart">Корзина</a>
        </div>
    </header>