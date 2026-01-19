<section class="faq--wrapper">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <p class="section__suptitle">
                    Ответы на
                </p>
                <h4 class="section__title">
                    Частые вопросы
                </h4>
            </div>
            <div class="col-xl-10">
                <?
                for ($i = 0; $i < 6; $i++) :
                ?>
                    <div class="faq--wrapper__item">
                        <input type="checkbox" id='faq-<?= $i; ?>'hidden>
                        <label for="faq-<?= $i ?>">Как я могу вернуть или обменять товар?</label>
                        <div class="faq--wrapper__item_desc">
                            <p>Вы можете вернуть или обменять товар в течение 14 дней. Подробнее про обмен и возврат можно узнать по номеру: +7 499 499 01 42</p>
                        </div>
                    </div>
                <?
                endfor;
                ?>
            </div>
        </div>
    </div>
</section>