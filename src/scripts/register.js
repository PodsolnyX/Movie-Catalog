import { api } from "../api.js";

export function Register() {
    $("#btn-register").click(function () {
        const userData = {
            userName: String($("#inputUserName").val()),
            name: $("#inputName").val(),
            password: String($("#inputPassword").val()),
            email: String($("#inputEmail").val()),
            birthDate: (`${$("#inputBirthDate").val()}T00:00:00.000Z`),
            gender: $("#inputGender").val() == "Мужской" ? 1 : 0
        };

        if (!CheckValidationData(userData)) return;  

        PostRequestRegister(userData);
    });
}

function PostRequestRegister(userData) {
    fetch(`${api}/api/account/register`, {
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
            location.pathname = "/"
        })
        .catch(err => {
            alert("Ошибка регистрации");
        });
}

function CheckValidationData(userData) {
    const passwordConfirmation = String($("#inputPasswordConfirmation").val());

    if (userData.userName == "") {
        alert("Введите логин");
        return false;
    }
    else if (userData.userName.length < 3) {
        alert("Логин слишком короткий");
        return false;
    }
    
    else if (userData.password == "") {
        alert("Введите пароль");
        return false;
    }
    else if (userData.password.length < 6) {
        alert("Пароль слишком короткий");
        return false;
    }
    else if (passwordConfirmation == "") {
        alert("Подтвердите пароль");
        return false;
    }
    else if (userData.password != passwordConfirmation) {
        alert("Пароли не совпадают");
        return false;
    }

    else if (userData.email == "") {
        alert("Введите адрес почты");
        return false;
    }
    else if (!userData.email.match(/^\S+@\S+\.\S+$/)) {
        alert("Email неккоректен");
        return false;
    }

    else if (userData.birthDate == "T00:00:00.000Z") {
        alert("Выберете дату рождения");
        return false;
    }
    else if (Date.parse(userData.birthDate) > Date.now()) {
        alert("Дата рождения неккоректна");
        return false;
    }

    else if (userData.name == "") {
        alert("Введите ФИО");
        return false;
    }
    
    return true;
}
