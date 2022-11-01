import {LoadDetailsMovie} from './movie-details.js';
import {LoadCatalogMovies} from './movies-catalog.js';
import {LoadFavoritesMovies} from './favorites.js';
import {LoadProfileInfo} from './profile.js';
import {Login} from "./login.js";
import {Register} from "./register.js";
import {SetupHighlightingActivePage} from "./navbar.js";

export var Router = {

    routes: {
        "/": "movieCatalog",
        "/:id": "movieCatalog",
        "/movie/:id": "movieDetails",
        "/login/": "login",
        "/register/": "register",
        "/favorites/": "favorites",
        "/profile/": "profile"
    },

    init: function () {
        this._routes = [];
        for (let route in this.routes) {

            let method = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^' + route.replace(/:\w+/g, '([\\w\-]+)') + '$'),
                callback: this[method]
            });
        }
    },

    dispatch: function (path) {
        history.pushState({}, "", path)

        var i = this._routes.length;
        let flagFound = false;

        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
                flagFound = true;
                this._routes[i].callback.apply(this, args.slice(1))
            }
        }
        if (!flagFound) {
            alert("Page not found");
        }
    },

    movieCatalog: function (id = 1) {
        document.documentElement.scrollIntoView(true);
        SetupHighlightingActivePage("films");
        $.get('/src/views/view-movies-catalog.html', function(data){
            $("main").html(data);
            LoadCatalogMovies(id);
        });
    },

    movieDetails: function (id) {
        document.documentElement.scrollIntoView(true);
        $.get('/src/views/view-movie-details.html', function(data){
            $("main").html(data);
            LoadDetailsMovie(id);
        });
    },

    login: function () {
        document.documentElement.scrollIntoView(true);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.auth == true) {
            Router.dispatch("/profile/");
            return;
        }
        $.get('/src/views/view-login.html', function(data){
            $("main").html(data);
            Login();
        });
    },

    register: function () {
        document.documentElement.scrollIntoView(true);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.auth == true) {
            Router.dispatch("/profile/");
            return;
        }
        $.get('/src/views/view-register.html', function(data){
            $("main").html(data);
            Register();
        });
    },

    favorites: function () {
        document.documentElement.scrollIntoView(true);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.auth == false) {
            Router.dispatch("/login/");
            return;
        }
        SetupHighlightingActivePage("favorites");
        $.get('/src/views/view-favorites.html', function(data){
            $("main").html(data);
            LoadFavoritesMovies();
        });
    },

    profile: function () {
        document.documentElement.scrollIntoView(true);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.auth == false) {
            Router.dispatch("/login/");
            return;
        }
        SetupHighlightingActivePage("profile");
        $.get('/src/views/view-profile.html', function(data){
            $("main").html(data);
            LoadProfileInfo();
        });
    }
}