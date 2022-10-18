import {LoadCatalogMovies, LoadDetailsMovie} from './scripts.js';

export var Router = {

    routes: {
        "/": "index",
        "/:id": "index",
        "/movie/:id": "movie",
        "/favorites": "favorites",
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

    index: function () {
        document.documentElement.scrollIntoView(true);
        $("#movies-catalog-container").removeClassClass("d-none");
        $("#movies-nav-container").removeClass("d-none");
        $("#movie-details-container").addClass("d-none");
        LoadCatalogMovies();
    },

    movie: function (id) {
        document.documentElement.scrollIntoView(true);
        $("#movies-catalog-container").addClass("d-none");
        $("#movies-nav-container").addClass("d-none");
        $("#movie-details-container").removeClass("d-none");
        LoadDetailsMovie(id);
    },

}