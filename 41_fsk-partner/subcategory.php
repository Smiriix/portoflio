<? require("elements/header.php") ?>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumbs__list">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Кровля и гидроизоляция</a></li>
                    <li><a href="#">Мягкая кровля</a></li>
                </ul>
                <h1 class="category--page__title">Мягкая кровля</h1>
            </div>
        </div>
    </div>
</section>
<seciton class="subcategories--subcategory">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="subcategories--subcategory__grid">
                    <?
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    include("elements/category__card.php");
                    ?>
                </div>
            </div>
        </div>
    </div>
</seciton>
<section class="catalog--wrapper">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="catalog--wrapper__grid">
                    <div class="catalog--wrapper__sidebar">
                        <span class="catalog--wrapper__total">
                            Найдено 562 товара
                        </span>
                        <label for="showfilter">
                            Фильтры
                        </label>
                        <input type="checkbox" id="showfilter" hidden>
                        <div class="catalog--wrapper__price--filter fil">
                            <p class="catalog--wrapper__filter_caption">
                                Цена, р.
                            </p>
                            <div class="catalog--wrapper__price_inputs">
                                <input type="text" value="от 2 272" disabled>
                                <input type="text" value="до 182 900" disabled>
                            </div>
                            <div class="catalog--wrapper__price_range--wrapper">
                                <input type="range" min='2272' value="2272" max='182900'>
                                <input type="range" min='2272' value="182900" max='182900'>
                            </div>
                        </div>
                        <script>
                            let minpriceRange = document.querySelectorAll(".catalog--wrapper__price_range--wrapper input")[0],
                                maxpriceRange = document.querySelectorAll(".catalog--wrapper__price_range--wrapper input")[1];

                            function setValues() {
                                document.querySelectorAll(".catalog--wrapper__price_inputs input")[0].value = 'от ' + (+minpriceRange.value).toLocaleString();
                                document.querySelectorAll(".catalog--wrapper__price_inputs input")[1].value = 'до ' + (+maxpriceRange.value).toLocaleString();

                                let startPos = ((+minpriceRange.value - +minpriceRange.getAttribute("min")) / (+minpriceRange.getAttribute("max") - +minpriceRange.getAttribute("min")) * +100).toFixed(2),
                                    endPos = ((+maxpriceRange.value - +maxpriceRange.getAttribute("min")) / (+maxpriceRange.getAttribute("max") - +maxpriceRange.getAttribute("min")) * +100).toFixed(2);

                                console.log(startPos, endPos);
                                document.querySelector('.catalog--wrapper__price_range--wrapper').style.cssText = `background: linear-gradient(to right, #b9b9b9 ${startPos}%, var(--color-blue) ${startPos}%, var(--color-blue) ${endPos}%, #b9b9b9 ${endPos}%)`;
                            }
                            setValues();
                            minpriceRange.addEventListener("input", () => {
                                if (+minpriceRange.value >= +maxpriceRange.value - 1000) {
                                    minpriceRange.value = +maxpriceRange.value - 1000;
                                }
                                setValues();
                            })
                            maxpriceRange.addEventListener("input", () => {
                                if (+maxpriceRange.value <= +minpriceRange.value + 1000) {
                                    maxpriceRange.value = +minpriceRange.value + 1000;
                                }
                                setValues();
                            })
                        </script>

                        <div class="catalog--wrapper__filter__group fil">
                            <p class="catalog--wrapper__filter_caption">
                                Выберите цвет
                            </p>
                            <div class="catalog--wrapper__filter_colors">
                                <input type="checkbox" style='background-color: #015FC9'>
                                <input type="checkbox" style='background-color: #00AD3B'>
                                <input type="checkbox" style='background-color: #D60000'>
                                <input type="checkbox" style='background-color: #E77800'>
                                <input type="checkbox" style="background-color: #692E8C">
                                <input type="checkbox" style="background-color: #000">
                                <input type="checkbox" style="background-color: #ECECEC">
                                <input type="checkbox" style="background-color: #EBFF00">
                            </div>
                        </div>

                        <div class="catalog--wrapper__filter__group fil">
                            <p class="catalog--wrapper__filter_caption">
                                Выберите цвет
                            </p>
                            <div class="catalog--wrapper__filter_checkbox">
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                            </div>
                        </div>
                        <div class="catalog--wrapper__filter__group fil">
                            <p class="catalog--wrapper__filter_caption">
                                Класс товара
                            </p>
                            <div class="catalog--wrapper__filter_checkbox">
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                                <label>
                                    <input type="checkbox">
                                    Болгария
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Показать 562 товара" class="action__btn fil">

                    </div>
                    <div class="catalog--wrapper__content">
                        <img src="img/images/banner__category.webp" alt="banner" class="catalog--wrapper__banner">
                        <label class="catalog--wrapper__sort">
                            Сортировать по: <select>
                                <option value="#">По популярности</option>
                                <option value="#">По популярности</option>
                                <option value="#">По популярности</option>
                            </select>
                        </label>
                        <div class="catalog--wrapper__items">
                            <?
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            include("elements/product__card.php");
                            ?>
                        </div>
                        <ul class="catalog--wrapper__paginations">
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14.5419 17.5941C14.7502 17.3858 14.8552 17.1391 14.8552 16.8533C14.8552 16.57 14.751 16.3225 14.5427 16.1141L8.43852 10.01L14.5635 3.88497C14.7577 3.69081 14.8552 3.44747 14.8552 3.15581C14.8552 2.86414 14.751 2.61414 14.5427 2.40581C14.4471 2.30585 14.3321 2.22655 14.2047 2.1728C14.0772 2.11905 13.9401 2.09199 13.8019 2.09331C13.5185 2.09331 13.271 2.19747 13.0627 2.40581L6.06269 9.42664C5.97936 9.50997 5.92102 9.60081 5.88519 9.69747C5.85019 9.79791 5.83272 9.90362 5.83352 10.01C5.83352 10.1216 5.85102 10.2258 5.88519 10.3225C5.92351 10.4248 5.98415 10.5173 6.06269 10.5933L13.0835 17.6141C13.2785 17.8091 13.5177 17.9058 13.8027 17.9058C14.0869 17.9058 14.3335 17.8025 14.5419 17.5941Z" fill="#015FC9" />
                                    </svg>
                                </a>
                            </li>
                            <li><span>1</span></li>
                            <li><a href='#'>2</a></li>
                            <li><a href='#'>3</a></li>
                            <li><a href='#'>4</a></li>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5.45815 2.40586C5.24981 2.61419 5.14481 2.86086 5.14481 3.14669C5.14481 3.43003 5.24898 3.67753 5.45731 3.88586L11.5615 9.99003L5.43648 16.115C5.24231 16.3092 5.14481 16.5525 5.14481 16.8442C5.14481 17.1359 5.24898 17.3859 5.45731 17.5942C5.55288 17.6942 5.66793 17.7735 5.79535 17.8272C5.92277 17.881 6.05986 17.908 6.19814 17.9067C6.48148 17.9067 6.72898 17.8025 6.93731 17.5942L13.9373 10.5734C14.0206 10.49 14.079 10.3992 14.1148 10.3025C14.1498 10.2021 14.1673 10.0964 14.1665 9.99003C14.1665 9.87836 14.149 9.77419 14.1148 9.67753C14.0765 9.57519 14.0159 9.48267 13.9373 9.40669L6.91648 2.38586C6.72148 2.19086 6.48231 2.09419 6.19731 2.09419C5.91315 2.09419 5.66648 2.19753 5.45815 2.40586Z" fill="#015FC9" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
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
<? require("elements/footer.php") ?>