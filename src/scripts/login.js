import { api } from "../api.js";

export function Login() {
    $("#btn-register").click(function () {
        location.pathname = "/register/";
    });
    $("#btn-login").click(function () {

        const login = $("#inputLogin").val(),
            password = $("#inputPassword").val();

        if (login == "") {
            alert("Введите логин");
            return;
        }
        else if (password == "") {
            alert("Введите пароль");
            return;
        }

        const userData = {
            username: login,
            password: password,
        };

        PostRequestLogin(userData);
    });
}

async function PostRequestLogin(userData) {
    fetch(`${api}/api/account/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Ошибка");
        })
        .then(json => {
            localStorage.setItem("JWT", json.token);
            location.pathname = "/";
        })
        .catch(err => {
            alert(err);
        });
}