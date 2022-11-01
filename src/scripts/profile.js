import { api } from "../api.js";

export function LoadProfileInfo() {

    const user = (JSON.parse(localStorage.getItem("user"))).userData;

    if (user.avatarLink != null && user.avatarLink != "")
        $(".avatar-profile").attr("src", user.avatarLink);

    $("#nickName").text(user.nickName);
    $("#inputEmail").val(user.email);
    $("#inputAvatar").val(user.avatarLink);
    $("#inputName").val(user.name);
    $("#inputBirthdate").val(user.birthDate.slice(0, 10));
    $("#inputGender").val(user.gender);
    $("#btnEdit").click(function () { EditProfile() });
    $("#btnSave").click(function () { SaveProfile(user) });
};

function EditProfile() {
    $("#btnEdit").addClass("d-none");
    $("#btnSave").removeClass("d-none");

    $("#nickName").removeAttr("disabled");
    $("#inputEmail").removeAttr("disabled");
    $("#inputAvatar").removeAttr("disabled");
    $("#inputName").removeAttr("disabled");
    $("#inputBirthdate").removeAttr("disabled");
    $("#inputGender").removeAttr("disabled");
}

function SaveProfile(user) {
    const newUserData = {
        id: user.id,
        nickName: user.nickName,
        email: String($("#inputEmail").val()),
        avatarLink: $("#inputAvatar").val() == "" ? null : $("#inputAvatar").val(),
        name: $("#inputName").val(),
        birthDate: (`${$("#inputBirthdate").val()}T00:00:00.000Z`),
        gender: $("#inputGender").val() == 1 ? 1 : 0
    }

    if (!CheckValidationData(newUserData)) return;

    PutRequestProfile(newUserData);
}

function PutRequestProfile(userData) {
    fetch(`${api}/api/account/profile`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                return location.reload();
            }
            throw new Error("Ошибка");
        })
        .catch(err => {
            alert("Ошибка");
        });
}

function CheckValidationData(userData) {
    if (userData.email == "") {
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
