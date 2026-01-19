<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GoodsShop</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Slick -->
    <link rel="stylesheet" href="/css/slick.css">
    <link rel="stylesheet" href="/css/slick-theme.css">
    <!-- My stylesheet -->
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="/img/logo/favicon.png">
</head>

<body>
    <div class="lightgrey d-lg-none"></div>
    <div class="modalwindow" id='search'>
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <div class="section__title">
                <span>Найти</span> товар
            </div>
            <form action="">
                <input type="text" placeholder="Я ищу...">
                <input type="submit" value="Искать" class="action__btn">
            </form>
        </div>
    </div>
    <div class="modalwindow" id='location'>
        <div class="modalwindow__panel">
            <div class="modalwindow__close"></div>
            <div class="section__title">
                <span>Выберить</span> город
            </div>
            <form action="">
                <select>
                    <option value="">Москва</option>
                    <option value="">Москва</option>
                    <option value="">Москва</option>
                </select>
                <input type="submit" value="Применить" class="action__btn">
            </form>
        </div>
    </div>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-lg-flex align-items-center">
                            <a href='#location' class="header__city showmodal">
                                Москва
                            </a>
                            <a href="#" class="header__select--city">
                                Укажите адрес доставки
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="/" class="header__logo">
                                <img src="/img/logo/logo.png" width="196" height="44" alt="goodsshop" class="header__logo_img">
                            </a>
                            <div id="menuBtn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <form class="header__search">
                                <input type="text" name="" id="" placeholder="Я ищу ...">
                                <input type="submit" value="&nbsp;">
                            </form>
                            <ul class="header__nav">
                                <li><a href="#">Акции</a></li>
                                <li><a href="#">Новинки</a></li>
                            </ul>
                            <div class="header__icons">
                                <a href="#">
                                    <img src="/img/icons/mappoint_green.svg" width="20" height="20" alt="mappoint">
                                    <span>Доставка</span>
                                </a>
                                <a href="#">
                                    <img src="/img/icons/profile_green.svg" width="20" height="20" alt="profile">
                                    <span>Войти</span>
                                </a>
                                <a href="#">
                                    <img src="/img/icons/cart_green.svg" width="20" height="20" alt="cart">
                                    <span>Корзина</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__catalog">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__catalog--wrapper">
                            <ul>
                                <li><a href="#" class="active">Сладости</a></li>
                                <li><a href="#">Напитки</a></li>
                                <li><a href="#">Снэки</a></li>
                            </ul>
                            <div class="header__catalog--panels">
                                <div class="header__catalog--panel active align-items-center justify-flex-start flex-wrap">
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                </div>
                                <div class="header__catalog--panel align-items-center justify-flex-start flex-wrap">
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                </div>
                                <div class="header__catalog--panel align-items-center justify-flex-start flex-wrap">
                                    <a href="#" class="header__catalog--item">
                                        <img src="/img/images/item_thumb.png" width="67" height="65" alt="product" class="header__catalog--item_img">
                                        <span class="header__catalog--item_name">
                                            Жевательный мармелад
                                            Жевательный мармелад
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__mobile d-lg-none">
            <a href="#" class="header__mobile_profile">Профиль</a>
            <a href="#search" class="header__mobile_search showmodal">Поиск</a>
            <div id="menuBTN">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#" class="header__mobile_cart">Корзина</a>
            <a href="#location" class="header__mobile_location showmodal">Местоположение</a>
        </div>
        <div class="header__mobile_list d-lg-none">
            <ul>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Акции</a></li>
                <li><a href="#">Новинки</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
    </header>