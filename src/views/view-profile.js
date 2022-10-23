export default () => `
    <div class="container">
        <div class="card">
            <div class="card-body row">
                <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center pb-2">
                    <img src="https://cdn.onlinewebfonts.com/svg/download_568657.png" class="img-thumbnail border border-2 mblank-5 avatar-profile" alt="" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 d-flex flex-column">
                    <div class="fs-2 fw-bold">Example NickName</div>
                    <div class="pt-2">
                        <label for="" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" id="inputEmail" name="email">
                    </div>
                    <div class="pt-2">
                        <label for="" class="form-label fw-bold">Ссылка на аватар</label>
                        <input type="text" class="form-control" id="inputAvatar" name="avatar">
                    </div>
                    <div class="pt-2">
                        <label for="" class="form-label fw-bold">ФИО</label>
                        <input type="text" class="form-control" id="inputName" name="name">
                    </div>
                    <div class="pt-2">
                        <label for="" class="form-label fw-bold">Дата рождения</label>
                        <input type="date" class="form-control" id="inputBirthdate" name="birth-date">
                    </div>
                    <div class="pt-2">
                        <label for="" class="form-label fw-bold">Пол</label>
                        <select class="form-select" id="gender">
                            <option value="1">Мужчина</option>
                            <option value="0">Женщина</option>
                        </select>
                    </div>
                    <div class="d-flex align-items-start">
                        <div class="btn btn-warning mt-3">Редактировать</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
` 