import {api} from "../api.js";

export async function LoadProfileInfo() {

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
    $("#btnSave").click(async function () { SaveProfile(user) });
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

async function SaveProfile(user) {
    const email = String($("#inputEmail").val()),
        avatarLink = $("#inputAvatar").val() == "" ? null : $("#inputAvatar").val(),
        name = $("#inputName").val(),
        birthDate = $("#inputBirthdate").val(),
        gender = $("#inputGender").val();

    if (email == "") {
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
    else if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert("Email неккоректен");
        return;
    }
    else if (Date.parse(birthDate) > Date.now()) {
        alert("Дата рождения неккоректна");
        return;
    }

    const newUserData = {
        id: user.id,
        nickName: user.nickName,
        email: email,
        avatarLink: avatarLink,
        name: name,
        birthDate: (`${birthDate}T00:00:00.000Z`),
        gender: gender == 1 ? 1 : 0
    }

    await PutRequestProfile(newUserData);
}

async function PutRequestProfile(userData) {
    try {
        const response = await fetch(`${api}/api/account/profile`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("JWT")
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            location.reload();
        }
        else {
            alert("Ошибка")
        }
    } catch {
        alert("Ошибка");
    }

}
