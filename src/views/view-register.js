export default () => ` 
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div>
                    <label for="" class="form-label fw-bold">Логин</label>
                    <input type="text" class="form-control" id="">
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Пароль</label>
                        <input type="password" class="form-control" id="">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Подтверждение пароля</label>
                        <input type="password" class="form-control" id="">
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" placeholder="name@example.com" id="" aria-describedby="emailHelp">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">ФИО</label>
                        <input type="text" class="form-control" id="">
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Дата рождения</label>
                        <input type="date" class="form-control" id="">
                    </div>
                    <div class="col-6">
                        <label for="" class="form-label fw-bold">Пол</label>
                        <select class="form-select">
                            <option value="1">Мужчина</option>
                            <option value="2">Женщина</option>
                        </select>
                    </div>
                </div>
                <div class="btn btn-primary mt-3">Зарегистироваться</div>
            </div>
        </div>
    </div>
`