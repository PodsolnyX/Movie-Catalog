export function Login() {
    document.getElementById("btn-login").addEventListener("click", function () {
       
        const form = document.getElementById("form-login");

        const login = form.querySelector('[name="login"]'), 
        password = form.querySelector('[name="password"]');

        const data = {
            login: login.value,
            password: password.value,
        };

        console.log(data)
    });
}