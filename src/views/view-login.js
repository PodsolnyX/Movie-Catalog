export default () => `
    <div class="container">
        <div class="card">
            <form class="card-body" id="form-login">
                <div>
                    <label for="" class="form-label fw-bold">Логин</label>
                    <input type="text" class="form-control" name="login">
                </div>
                <div class="pt-2">
                    <label for="" class="form-label fw-bold">Пароль</label>
                    <input type="password" class="form-control" name="password">
                </div>
                <div class="d-flex pt-3">
                    <div class="btn btn-primary" id="btn-login">Войти</div>
                    <div class="btn btn-secondary ms-2">Зарегистироваться</div>
                </div>    
            </form>
        </div>
    </div>
`;