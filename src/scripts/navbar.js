import { Logout } from "./logout.js";

export function SetupNavbar() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.auth == true) {
        $(".nav-item-auth").removeClass("d-none");
        $(".nav-item-not-auth").addClass("d-none");
        $("#nameUser").text(user.userData.nickName);
        $("#btnLogout").click(function () { Logout() });
    }
    else {
        $(".nav-item-auth").addClass("d-none");
        $(".nav-item-not-auth").removeClass("d-none");
    }
}

export function SetupHighlightingActivePage(key) {
    if (key == "films") {
        $("#navFilms").addClass("active");
        $("#navFavorites").removeClass("active");
        $("#navProfile").removeClass("active");
    }
    else if (key == "favorites") {
        $("#navFilms").removeClass("active");
        $("#navFavorites").addClass("active");
        $("#navProfile").removeClass("active");
    }
    else if (key == "profile") {
        $("#navFilms").removeClass("active");
        $("#navFavorites").removeClass("active");
        $("#navProfile").addClass("active");
    }
    else {
        $("#navFilms").removeClass("active");
        $("#navFavorites").removeClass("active");
        $("#navProfile").removeClass("active");
    }
}