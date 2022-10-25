import {LoadDetailsMovie} from './movie-details.js';
import {LoadCatalogMovies} from './movies-catalog.js';
import {LoadFavoritesMovies} from './favorites.js';
import {LoadProfileInfo} from './profile.js';
import {Login} from "./login.js";
import {Register} from "./register.js";
import viewLogin from "/src/views/view-login.js";
import viewRegister from "/src/views/view-register.js";
import viewMoviesCatalog from "/src/views/view-movies-catalog.js";
import viewMovieDetails from "/src/views/view-movie-details.js";
import viewFavorites from "/src/views/view-favorites.js";
import viewProfile from "/src/views/view-profile.js";

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

        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
                this._routes[i].callback.apply(this, args.slice(1))
            }
        }
    },

    movieCatalog: function (id = 1) {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewMoviesCatalog());
        LoadCatalogMovies(id);
    },

    movieDetails: function (id) {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewMovieDetails());
        LoadDetailsMovie(id);
    },

    login: function () {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewLogin());
        Login();
    },

    register: function () {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewRegister());
        Register();
    },

    favorites: function () {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewFavorites());
        LoadFavoritesMovies();
    },

    profile: function () {
        document.documentElement.scrollIntoView(true);
        $("main").html(viewProfile());
        LoadProfileInfo();
    }

}