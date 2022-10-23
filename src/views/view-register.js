export default () => ` 
    <div class="container">
        <div class="card">
            <form class="card-body" id="form-register">
                <div>
                    <label for="" class="form-label fw-bold">Логин</label>
                    <input type="text" class="form-control" id="inputUserName" name="userName">
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Пароль</label>
                        <input type="password" class="form-control" id="inputPassword" name="password">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Подтверждение пароля</label>
                        <input type="password" class="form-control" id="inputPasswordConfirmation" name="passwordConfirmation">
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" placeholder="name@example.com" id="inputEmail" name="email" aria-describedby="emailHelp">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">ФИО</label>
                        <input type="text" class="form-control" id="inputName" name="name">
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Дата рождения</label>
                        <input type="date" class="form-control" id="inputBirthDate" name="birthDate">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Пол</label>
                        <select class="form-select" id="inputGender" name="gender">
                            <option value="1">Мужчина</option>
                            <option value="0">Женщина</option>
                        </select>
                    </div>
                </div>
                <div class="btn btn-primary mt-3" type="submit" id="btn-register">Зарегистироваться</div>
            </form>
        </div>
    </div>
`