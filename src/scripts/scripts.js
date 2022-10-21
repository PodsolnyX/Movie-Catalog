import {Router} from "./router.js"

window.addEventListener("load", () => {
    RegisterClickReferenceEvents()
    Router.dispatch(window.location.pathname);
})

window.addEventListener("popstate", () => {
    RegisterClickReferenceEvents()
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

