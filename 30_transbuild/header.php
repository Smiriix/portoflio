<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documents</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="css/bootstrap-utilities.min.css">
    <!-- Slick -->
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/slick-theme.css">
    <!-- My stylesheet -->
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/style.css">

</head>

<body>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="https://yandex.ru/maps?text=Россия, 400002, г. Москва, Мира ул., 23, офис 410" class="header__address">
                                <img src="/img/icons/address__icon.svg" width="20" height="19" alt="address">
                                Россия, 400002, г. Москва, Мира ул., 23, офис 410
                            </a>
                            <span class="header__link">
                                What`sApp
                                <a href="tel:79000000000">+7 (900) 000-00-00</a>
                            </span>
                            <span class="header__link">
                                E-mail:
                                <a href="mailto:info@info.ru">info@info.ru</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                            <a href="/" class="header__logo">
                                <img src="/img/logo/logo.svg" width="277" height="38" class="header__logo_img" alt="logo">
                            </a>
                            <ul class="header__nav d-none d-lg-flex">
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Наши услуги</a></li>
                                <li><a href="#">Кейсы</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                            <a href="tel:88006004020" class="header__phone">
                                8 (800) 600-40-20
                            </a>
                            <a href="#" class="modal__btn">
                                Оставить заявку
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header__nav_mobile d-lg-none">
                <ul class="header__nav mobile d-flex d-lg-none">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Наши услуги</a></li>
                    <li><a href="#">Кейсы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div class="d-flex d-lg-none" id="menuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>