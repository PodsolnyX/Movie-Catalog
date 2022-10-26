export default () => `
    <div class="card d-none border border-2 mb-3 text-start" id="sample-card-review">
        <div class="card-header header-review d-flex justify-content-between">
            <div class="d-flex">
                <img class="img-fluid review-avatar rounded-circle avatar" src="https://www.kindpng.com/picc/m/301-3014743_logo-cine-web-design-4-circle-hd-png.png" alt="" />
                <div class="review-nickname d-flex align-items-center fw-bold ps-3">Анонимный пользователь</div>
            </div>
            <div>
                <div class="d-flex">
                    <div class="pe-1">Оценка:</div>
                    <div class="review-rating d-flex align-items-center badge"></div>
                </div>
                <div class="d-flex">
                    <div class="text-nowrap pe-1">Дата отзыва:</div>
                    <div class="review-date"></div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p class="review-text"></p>
        </div>
        <div class="card-footer d-none">
            <div class="btn btn-sm btn-warning btn-edit-rewiew">Редактировать</div>
            <div class="btn btn-sm btn-danger btn-delete-rewiew">Удалить</div>
        </div>
    </div>

    <main class="container" id="movie-details-container">
        <div class="card">
            <div class="card-body">
                <div class="row pb-3">
                    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12 d-flex justify-content-center">
                        <img class="img-fluid film-poster" alt="" />
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-7 col-sm-6">
                        <div class="film-name fs-2"></div>
                        <div class="d-none pb-2"></div>
                        <div class="btn btn-sm mt-2 d-none" id="btnFavorites"></div>

                        <div class="pt-4">
                            <div class="fs-4 pb-1">О фильме</div>
                            <div class="d-flex border-bottom pb-1 justify-content-between">
                                <div class="text-muted pe-2">Год производства</div>
                                <div class="film-year fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Страна</div>
                                <div class="film-country fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Жанр</div>
                                <div class="film-genre fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted">Время</div>
                                <div class="film-time fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Слоган</div>
                                <div class="film-tagline fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Режиссер</div>
                                <div class="film-director fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Бюджет</div>
                                <div class="film-budget fw-bold">-</div>
                            </div>
                            <div class="d-flex border-bottom pb-1 pt-1 justify-content-between">
                                <div class="text-muted pe-2">Сборы в мире</div>
                                <div class="film-fees fw-bold">-</div>
                            </div>
                            <div class="d-flex pt-1 justify-content-between">
                                <div class="text-muted">Возраст</div>
                                <div class="film-ageLimit d-flex align-items-center badge bg-secondary">-</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fs-4">Отзывы и оценки</div>
                <div class="card mt-2 d-none" id="formAddReview">
                    <div class="card-header text-muted" id="labelFormReview">Добавить отзыв</div>
                    <div class="card-body">
                        <p>Текст отзыва</p>
                        <textarea class="form-control" rows="3" id="inputTextReview"></textarea>
                        <p class="fw-bold pt-3">Оценка</p>
                        <select class="form-select" id="inputRating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" selected>5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div class="form-check pt-2 pb-2">
                            <input class="form-check-input" type="checkbox" value="true" id="inputAnonymous">
                            <label class="form-check-label" for="flexCheckDefault">Оставить отзыв анонимно</label>
                        </div>
                        <div class="btn btn-primary" id="btnSave">Сохранить</div>
                    </div>
                </div>

                <div class="container text-center pt-4 pb-4" id="reviews-container"></div>
            </div>
        </div>
    </main>
`