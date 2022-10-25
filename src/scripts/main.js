import { Router } from "./router.js";
import { Authorization } from "./authorization.js";
import { Logout } from "./logout.js";

window.addEventListener("load", async () => {
    CheckAuthorizationUser();
    RegisterClickReferenceEvents();
    Router.dispatch(window.location.pathname);
})

window.addEventListener("popstate", async () => {
    CheckAuthorizationUser();
    RegisterClickReferenceEvents();
    Router.dispatch(window.location.pathname);
})

function RegisterClickReferenceEvents() {
    Router.init();

    let handler = event => {
        let url = new URL(event.currentTarget.href);
        Router.dispatch(url.pathname);
        event.preventDefault();
    }

    let anchors = document.querySelectorAll(".card-movie-catalog", ".navbar");

    for (let anchor of anchors) anchor.onclick = handler;
}

async function CheckAuthorizationUser() {
    await Authorization();

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

