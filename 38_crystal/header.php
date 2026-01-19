<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crystal</title>
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
    <div class="modalgrey"></div>
    <div class="modalwindow active">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="modalwindow__panel">
                        <div class="modalwindow__close"></div>
                        <p class="modalwindow__title">СВЕТОВАЯ РЕКЛАМА (НАРУЖНАЯ/ИНТЕРЬЕРНАЯ)</p>
                        <p class="modalwindow__subtitle">Рассчитать стоимость световой рекламы легко!</p>
                        <ul>
                            <li>Выбираем вид вывески (световой короб или буквы)</li>
                            <li>Выбираем высоту или размер вывески</li>
                            <li>Выбираем форму вашей будущей вывески</li>
                            <li>Появляется <b>ориентировочная цена</b> на единицу</li>
                            <li>Нажимаем отправить заявку и в течении <b>15 минут</b> получаете обратный ответ !</li>
                        </ul>
                        <form action="">
                            <div class="modalwindow__services_slider">
                                <label>
                                    <input type="radio" name='service[]' checked>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name='service[]'>
                                    <span>
                                        <img src="img/images/service__thumb.png" width="100" height="100" alt="">
                                        <span>Световые буквы</span>
                                    </span>
                                </label>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="modalwindow__feedback">Если не нашли подходящий вариант, <a href="#">Позвоните нам!</a></span>
                            </div>
                            <div class="modalwindow__form">
                                <div class="modalwindow__form_left">
                                    <img src="img/images/service__structure.png" width="512" height="428">
                                    <div class="modalwindow__form_left--grey">
                                        <ul class="modalwindow__form_specs">
                                            <li><b>Лицо:</b> Акрил 3 мм молочный + пленка</li>
                                            <li><b>Торец:</b> ПВХ пластик 3 мм + пленка</li>
                                            <li><b>Задник:</b> ПВХ пластик 5 мм</li>
                                            <li><b>Подсветка :</b> Светодиоды серии 5050 SMD4</li>
                                        </ul>
                                        <div class="modalwindow__form_counter--wrapper">
                                            <p class="modalwindow__price">
                                                6750 руб.
                                            </p>
                                            <div class="modalwindow__form_count">
                                                <span data-pluse="1"></span>
                                                <input type="number" min='0' value="1" readonly>
                                                <span data-pluse="-1"></span>
                                            </div>
                                            <input type="submit" value="Оставить заявку" class="action__btn">
                                        </div>
                                    </div>
                                </div>
                                <div class="modalwindow__form_right">
                                    <label>
                                        Ваш текст
                                        <textarea placeholder="Текст"></textarea>
                                    </label>
                                    <label class="select">
                                        Шрифт
                                        <select>
                                            <option value="Простой шрифт">Простой шрифт</option>
                                            <option value="Простой шрифт">Простой шрифт</option>
                                        </select>
                                    </label>
                                    <label class="height">
                                        Высота буквы, см
                                        <input type="number" value="34">
                                    </label>
                                    <label>
                                        Подсветка
                                        <select>
                                            <option value="Светится лицо">Светится лицо</option>
                                        </select>
                                    </label>
                                    <label>
                                        Монтажные работы c доставкой
                                        <select>
                                            <option value="Светится лицо">Не требуются</option>
                                        </select>
                                    </label>
                                    <label class="accept">
                                        <span>
                                            <input type="checkbox">
                                        </span>
                                        Согласование с КГА Санкт-Петербурга
                                    </label>
                                    <span class="form__desc">Сроком на 5 лет, подготовка проекта - 10000 рублей</span>
                                    <label class="form_mail">
                                        E-mail
                                        <span>
                                            <input type="text" placeholder="info@info.ru">
                                        </span>
                                    </label>
                                    <label class="form_mail">
                                        Телефон
                                        <span>
                                            <input type="text" placeholder="+7(___)___-__-__">
                                        </span>
                                    </label>
                                    <label>
                                        Ваш текст
                                        <textarea placeholder="Текст"></textarea>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="social__fixed">
        <div class="social__fixed_list">
            <a href="#">
                <img src="img/icons/calc--hexagon__red.svg" width="51" height="51" alt="calc">
                <span>Расчитать стоимость</span>
            </a>
            <a href="#">
                <img src="img/icons/phone--hexagon__red.svg" width="51" height="51" alt="phone">
                <span>Получить консультацию</span>
            </a>
            <div class="social__fixed_socs">
                <span>
                    Напишите напрямую
                </span>
                <a href="#">
                    <img src="img/icons/whatsapp--circle__red.svg" width="32" height="32" alt="whatsapp">
                </a>
                <a href="#">
                    <img src="img/icons/telegram--circle__red.svg" width="32" height="32" alt="telegram">
                </a>
            </div>
        </div>
        <img class="social__toggle" width='50' height='50' src="img/images/modal__mess.svg" alt="mess">
    </div>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="#" class="header__logo">
                                <img src="img/logo/logo.svg" alt="crystal" width="182" height="41" class="header__logo_img">
                            </a>
                            <ul class="header__nav">
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Доставка и оплата</a></li>
                                <li><a href="#">Блог</a></li>
                                <li><a href="#">Сервис и гарантии</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                            <ul class="header__contacts">
                                <li><a href="#">+7 (812) 980 60 34</a></li>
                                <li><a href="#">f-sogl@yandex.ru</a></li>
                            </ul>
                            <a href="#" class="header__phone">
                                <img src="img/icons/phone--circle__red.svg" width="30" height="30" alt="phone">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__catalog">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__catalog_grid">
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                            <div class="header__catalog_item">
                                <img src="img/images/category_thumb.png" width="190" height="110" alt="category_name" class="header__catalog_item--thumb">
                                <a href="#" class="header__catalog_item--name">
                                    Вывески
                                </a>
                                <ul>
                                    <li><a href="#">Объемные световые буквы</a></li>
                                    <li><a href="#">Световой короб</a></li>
                                    <li><a href="#">Панель-кронштейн / консоль</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__mobile--wrapper d-lg-none">
            <ul>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Блог</a></li>
                <li><a href="#">Сервис и гарантии</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
        <div class="header__mobile d-lg-none">
            <a href="#" class="header__mobile_calc">Рассчитать стоимость</a>
            <div id="menuBTN" class="">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="#" class="header__mobile_phone">Получить консультацию</a>
        </div>
        <a href="#openMenu" class="header__catalog_btn">
            Каталог услуг
        </a>
    </header>
    <!-- Header -->