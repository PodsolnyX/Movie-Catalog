export function Register() {
    $("#btn-register").click(function () {
        const userName = $("#inputUserName").val(),
            password = $("#inputPassword").val(),
            passwordConfirmation = $("#inputPasswordConfirmation").val(),
            email = $("#inputEmail").val(),
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
        if (password != passwordConfirmation) {
            alert("Пароли не совпадают");
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
        fetch('https://react-midterm.kreosoft.space/api/account/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem("JWT", data.token);
                location.pathname = "/";
            })
    } catch {
        alert("Ошибка регистрации");
    }

}

