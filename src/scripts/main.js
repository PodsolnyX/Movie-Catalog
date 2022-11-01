import { Router } from "./router.js";
import { Authorization } from "./authorization.js";
import { SetupNavbar } from "./navbar.js";

window.addEventListener("load", async () => {
    SetupPage();
})

window.addEventListener("popstate", async () => {
    SetupPage();
})

async function SetupPage() {
    await Authorization();
    SetupNavbar();
    RegisterClickReferenceEvents();
    Router.dispatch(window.location.pathname);
}

function RegisterClickReferenceEvents() {
    Router.init();

    let handler = event => {
        let url = new URL(event.currentTarget.href);
        Router.dispatch(url.pathname);
        event.preventDefault();
    }

    let anchors = $(".card-movie-catalog", ".navbar");

    for (let anchor of anchors) anchor.onclick = handler;
}
