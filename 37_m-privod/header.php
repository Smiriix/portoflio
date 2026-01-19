<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mnogoprivoda.ru</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="css/bootstrap-utilities.min.css">
    <!-- Slick -->
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <!-- My stylesheet -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="img/logo/favicon.png">

</head>

<body>
    <div class="modalwindow" id="feedback">
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <h4>Заказать звонок</h4>
            <form>
                <span><input type="text" placeholder="ФИО"></span>
                <span><input type="text" placeholder="Телефон"></span>
                <span><input type="text" placeholder="Email"></span>
                <span><textarea placeholder="Комментарий к заказу"></textarea></span>
                <label>
                    <span>
                        <input type="checkbox">
                    </span>
                    Соглашаюсь с Политикой конфиденциальности и обработки персональных данных
                </label>
                <input type="submit" class="action__btn" value="Отправить">
            </form>
        </div>
    </div>
    <div class="modalwindow" id="geo">
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <h4>Ваше местоположение</h4>
            <form>
                <select>
                    <option value="#">Москва</option>
                    <option value="#">Ростов</option>
                    <option value="#">Краснодар</option>
                </select>
            </form>
        </div>
    </div>
    <div class="modalwindow" id="search">
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <h4>Поиск</h4>
            <form>
                <span>
                    <input type="text" placeholder="Введите запрос">
                </span>
                <input type="submit" class='action__btn' value="Найти">
            </form>
        </div>
    </div>
    <div class="grey__layer d-lg-none">
        <div class="mobile__menu">
            <ul>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Документы</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Справочник</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <div class="header__socs">
                <a href="#"><img src="img/icons/instagram_green.svg" width="29" height="29" alt="soc"></a>
                <a href="#"><img src="img/icons/telegram_green.svg" width="29" height="29" alt="soc"></a>
                <a href="#"><img src="img/icons/whatsapp_green.svg" width="29" height="29" alt="soc"></a>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="header__mobile d-lg-none">
            <a href='#search' class="header__mobile_callback search showmodal">
                <span>Поиск</span>
            </a>
            <a href="#" class="header__mobile_callback catalog">
                Каталог
            </a>
            <div id="menuBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span class="header__geolocation">
                <a href="#geo" class="showmodal">Москва</a>
            </span>
            <a href="#feedback" class="header__mobile_callback showmodal">
                <span>
                    Заказать звонок
                </span>
            </a>
        </div>
        <div class="header__top d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="/" class="header__logo">
                                <img src="img/logo/logo.svg" width="235" height="53" alt="logo" class="header__logo_img">
                            </a>
                            <span class="header__geolocation">
                                Ваш город
                                <a href="#geo" class="showmodal">Москва</a>
                            </span>
                            <div class="header__contacts d-flex flex-column align-items-start">
                                <a href="#">+7 499 390-46-25</a>
                                <a href="#">8 800 500-77-43</a>
                                <span>Пн-Пт с 09:00 до 18:00</span>
                            </div>
                            <div class="header__socs">
                                <a href="#"><img src="img/icons/instagram_green.svg" width="29" height="29" alt="soc"></a>
                                <a href="#"><img src="img/icons/telegram_green.svg" width="29" height="29" alt="soc"></a>
                                <a href="#"><img src="img/icons/whatsapp_green.svg" width="29" height="29" alt="soc"></a>
                            </div>
                            <a href="#feedback" class="action__btn showmodal">
                                Заказать звонок
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <ul class="header__nav">
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Документы</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Справочник</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                            <form class="header__search">
                                <input type="text" placeholder="Поиск">
                                <input type="submit" value="&nbsp;">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header -->