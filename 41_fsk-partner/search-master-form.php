<? require('elements/header.php') ?>
<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="breadcrumbs__list" style="margin-bottom: 0">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Ищу работу</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="search--form">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="search--form__title">
                    Ты мастер ремонта и ищешь работу?
                </h1>
                <span class="search--form__desc">
                    Компания «Строй Комплект Поставка» приглашает к сотрудничеству строительные компании, дизайн-агенства, производителей мебели, частные строительные бригады, бригадиров, прорабов, дизайнеров, а так же частных лиц.
                </span>
            </div>
        </div>
    </div>
</section>
<section class="search--job-form green">
    <div class="container">
        <div class="row">
            <div class="d-none d-lg-block col-lg-6">
                <img src="img/images/master--green.webp" width="550" height="595" alt="master" class="search--job-form__man">
            </div>
            <div class="col-lg-6">
                <p class="search--job-form__title">Заполните анкету</p>
                <form>
                    <label class="search--job-form__upload--photo">
                        <span>Загрузить фото</span>
                        <span class="search--job-form__upload--photo_photo"></span>
                        <input type="file" accept="image/png,image/jpeg,image/webp">
                    </label>
                    <div class="input">
                        Название работы
                        <input type="text" placeholder="Плотник-станочник (обязателно)">
                    </div>
                    <div class="input">
                        Стоимость работы
                        <input type="text" placeholder="до 80 000 ₽/вахта 30 дней (обязателно)">
                    </div>
                    <div class="input">
                        Введите номер телефона
                        <input type="text" placeholder="Телефон (обязателно)">
                    </div>
                    <div class="model--job">
                        Выберите вид работ
                        <select>
                            <option value="">Выберите вид работ</option>
                            <option value="Выберите вид работ">Выберите вид работ</option>
                            <option value="Выберите вид работ">Выберите вид работ</option>
                        </select>
                    </div>
                    <div class="model--job">
                        Введите описание работы
                        <span>0 / 1000</span>
                        <input type="text" maxlength="1000" placeholder="Описание работы">
                    </div>
                    <input type="submit" value="Отправить анкету">
                </form>
            </div>
        </div>
    </div>
</section>
<script>
    let uploadPhoto = document.querySelector(".search--job-form__upload--photo input");
    uploadPhoto.onchange = (e) => {
        let file = URL.createObjectURL(uploadPhoto.files[0]);
        document.querySelector(".search--job-form__upload--photo .search--job-form__upload--photo_photo").style.backgroundImage = `url('${file}')`;
    }
    let inputLenght = document.querySelector(".model--job input");
    inputLenght.oninput = () => {
        if(inputLenght.value.length > inputLenght.getAttribute('maxlength')){
            inputLenght.value = inputLenght.value.slice(0, 1000);
        }
        document.querySelector(".model--job span").innerHTML = `${inputLenght.value.length} / ${inputLenght.getAttribute('maxlength')}`;
    }
</script>
<? require('elements/footer.php') ?>