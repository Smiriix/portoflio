<?
include("elements/header.php");
?>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumbs__list">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Кровля и гидроизоляция</a></li>
                </ul>
                <h1 class="category--page__title">Кровля и гидроизоляция</h1>
            </div>
        </div>
    </div>
</section>
<section class="parent--category">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="parent--category__grid">
                    <div class="parent--category__sidebar">
                        <ul class="parent--category__sidebar_list">
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Кровля и гидроизоляция</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Строительные материалы</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Инструмент</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Вентиляция </a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">и кондиционирование (ВиК)</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Сантехника и канализация</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Благоустройство территорий</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Отделочные и стройматериалы</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Электрика и свет</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Двери и входные группы</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Системы отопления </a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">и водоснабжения</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Все для сварки</a></li>
                            <li><a href="#"><img src="img/images/category__icon.svg" width="24" height="24" alt="category_icon">Противопожарное оборудование</a></li>
                        </ul>
                    </div>
                    <div class="parent--category__content">
                        <div class="parent--category__subcategories_grid">
                            <?
                            include("elements/category__card.php");
                            include("elements/category__card.php");
                            include("elements/category__card.php");
                            include("elements/category__card.php");
                            include("elements/category__card.php");
                            include("elements/category__card.php");
                            ?>
                        </div>
                        <div class="specials--banner__slider">
                            <div class="swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="img/images/banner__special.webp" width="636" height="291" alt="banner">
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="img/images/banner__special.webp" width="636" height="291" alt="banner">
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#">
                                            <img src="img/images/banner__special.webp" width="636" height="291" alt="banner">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-prev" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="20" fill="white" />
                                <path d="M24.5416 27.5942C24.7499 27.3858 24.8549 27.1392 24.8549 26.8533C24.8549 26.57 24.7508 26.3225 24.5424 26.1142L18.4383 20.01L24.5633 13.885C24.7574 13.6908 24.8549 13.4475 24.8549 13.1558C24.8549 12.8642 24.7508 12.6142 24.5424 12.4058C24.4469 12.3059 24.3318 12.2266 24.2044 12.1728C24.077 12.1191 23.9399 12.092 23.8016 12.0933C23.5183 12.0933 23.2708 12.1975 23.0624 12.4058L16.0624 19.4267C15.9791 19.51 15.9208 19.6008 15.8849 19.6975C15.8499 19.7979 15.8325 19.9036 15.8333 20.01C15.8333 20.1217 15.8508 20.2258 15.8849 20.3225C15.9233 20.4248 15.9839 20.5174 16.0624 20.5933L23.0833 27.6142C23.2783 27.8092 23.5174 27.9058 23.8024 27.9058C24.0866 27.9058 24.3333 27.8025 24.5416 27.5942Z" fill="#015FC9" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="swiper-button-next" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="white" />
                                <path d="M15.4584 12.4058C15.2501 12.6142 15.1451 12.8608 15.1451 13.1467C15.1451 13.43 15.2492 13.6775 15.4576 13.8858L21.5617 19.99L15.4367 26.115C15.2426 26.3092 15.1451 26.5525 15.1451 26.8442C15.1451 27.1358 15.2492 27.3858 15.4576 27.5942C15.5531 27.6941 15.6682 27.7734 15.7956 27.8272C15.923 27.8809 16.0601 27.908 16.1984 27.9067C16.4817 27.9067 16.7292 27.8025 16.9376 27.5942L23.9376 20.5733C24.0209 20.49 24.0792 20.3992 24.1151 20.3025C24.1501 20.2021 24.1675 20.0964 24.1667 19.99C24.1667 19.8783 24.1492 19.7742 24.1151 19.6775C24.0767 19.5752 24.0161 19.4826 23.9376 19.4067L16.9167 12.3858C16.7217 12.1908 16.4826 12.0942 16.1976 12.0942C15.9134 12.0942 15.6667 12.1975 15.4584 12.4058Z" fill="#015FC9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="specials--items fade--grey__top">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="section__title">Ваша подборка товаров со скидками – сэкономьте сейчас</h4>
                <div class="specials--items__grid">
                    <? include("elements/product__card.php"); ?>
                    <? include("elements/product__card.php"); ?>
                    <? include("elements/product__card.php"); ?>
                    <? include("elements/product__card.php"); ?>
                </div>
                <a href="#" class="section__btn">
                    Смотреть еще
                </a>
            </div>
        </div>
    </div>
</section>
<section class="page--desc fade--white__top">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img src="img/images/category__description.webp" width="635" height="396" alt="" class="page--desc__img">
            </div>
            <div class="col-lg-6">
                <h3>Преимущества</h3>
                <p>Пиломатериал востребован у потребителей, так как используется для разных задач в строительстве. Его применяют для возведения промышленных построек, сельскохозяйственных объектов, храмов и разных видов жилищ.Материал отличается следующими преимуществами:</p>
                <ul>
                    <li>высокий уровень прочности;</li>
                    <li>простота обработки поверхностей, </li>так как древесина легко распиливается и податлива к сверлению;
                    <li>превосходные эксплуатационные хар</li>актеристики при небольшом весе. Способность выдерживать значительные нагрузки несущих конструкций;
                    <li>древесина безопасна для здоровья,</li> не вызывывает аллергических реакций;
                    <li>приятный запах;</li>
                    <li>доступная цена пиломатериалов.</li>
                </ul>
                <p>Сырье отличается стойкостью к износу и долговечностью. В каталоге представлена продукция из древесины разных видов – вагонка, блок-хаус, брусья.</p>
            </div>
        </div>
        <div class="row flex-row-reverse">
            <div class="col-lg-6">
                <img src="img/images/category__description.webp" width="635" height="396" alt="" class="page--desc__img">
            </div>
            <div class="col-lg-6">
                <h3>Преимущества</h3>
                <p>При изготовлении пиломатериала остается значительное количество отходов, которые также могут использоваться для разных сфер деятельности. Пиломатериалы из лиственницы подходят для отделки зданий. Заготовки делятся по сортам – экстра, прима, АВ, С.При приобретении пиломатериалов можно также заказать обработку для обеспечения защиты поверхностей от солнечных лучей и огня.При выборе продукции важно уделять внимание ее внешнему виду. Поверхности должны быть ровными и иметь равномерный оттенок. Также не должно быть следов повреждений от жучков и гнили.Пиломатериал часто приобретают в зимнее время, так как из-за низкой влажности древесина более сухая. Она не трескается и не закручивается.После покупки материала, важно обеспечить его правильное хранение. Его нужно сложить в сухом помещении. На улице можно разместить материал под брезентом. Важно обеспечить качественную вентиляцию. Древесину нужно укладывать правильно. Между досками должно оставаться расстояние по сантиметру в каждом ряду. Такое расположение обеспечивает хорошую вентиляцию. Цена пиломатериала зависит от сорта используемой древесины и качественных характеристик.</p>
            </div>
        </div>
    </div>
</section>
<section class="last--brands">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="section__title">
                    мы работаем с брендами
                </p>
                <div class="last--brands_grid">
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                    <a href="#" class="last--brands__item">
                        <img src="img/images/partner.webp" width="196" height="64" alt="brand">
                    </a>
                </div>
                <a href="#" class="section__btn">
                    Смотреть еще
                </a>
            </div>
        </div>
    </div>
</section>
<?
include('elements/footer.php');
?>