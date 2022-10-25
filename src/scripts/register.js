export function Register() {
    $("#btn-register").click(function () {
        const userName = String($("#inputUserName").val()),
            password = String($("#inputPassword").val()),
            passwordConfirmation = String($("#inputPasswordConfirmation").val()),
            email = String($("#inputEmail").val()),
            name = $("#inputName").val(),
            birthDate = $("#inputBirthDate").val(),
            gender = $("#inputGender").val();

        if (userName == "") {
            alert("Введите логин");
            return;
        }
        else if (password == "") {
            alert("Введите пароль");
            return;
        }
        else if (passwordConfirmation == "") {
            alert("Подтвердите пароль");
            return;
        }
        else if (email == "") {
            alert("Введите адрес почты");
            return;
        }
        else if (birthDate == "") {
            alert("Выберете дату рождения");
            return;
        }
        else if (name == "") {
            alert("Введите ФИО");
            return;
        }
        if (password.length < 6) {
            alert("Пароль слишком короткий");
            return;
        }
        else if (userName.length < 2) {
            alert("Логин слишком короткий");
            return;
        }
        else if (password != passwordConfirmation) {
            alert("Пароли не совпадают");
            return;
        }
        else if (!email.match(/^\S+@\S+\.\S+$/)) {
            alert("Email неккоректен");
            return;
        }
        else if (Date.parse(birthDate) > Date.now()) {
            alert("Дата рождения неккоректна");
            return;
        }

        const userData = {
            userName: userName,
            name: name,
            password: password,
            email: email,
            birthDate: (`${birthDate}T00:00:00.000Z`),
            gender: gender == "Мужской" ? 1 : 0
        };

        PostRequestRegister(userData);
    });
}

async function PostRequestRegister(userData) {
    try {
        const response = fetch('https://react-midterm.kreosoft.space/api/account/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("JWT", data.token);
            location.pathname = "/";
        }
        else {
            alert("Ошибка регистрации");
        }
    } catch {
        alert("Ошибка регистрации");
    }

}

