import { CalculateGenresString, СalculateMediumRating, GetColorByRating} from "./misc.js";
import { api } from "../api.js";
import { Router } from "./router.js";

export function LoadCatalogMovies(id = 1) {
    fetch(`${api}/api/movies/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Ошибка");
        })
        .then(json => {
            if (json.pageInfo.pageCount < id) {
                Router.dispatch(`/${json.pageInfo.pageCount}`);
                return;
            }
            json.movies.forEach(function (movie, i, arr) {
                CreateMovieCard(movie);
            });
            InitMoviesNavigation(json);
        })
        .catch(err => {
            alert("Page not found!");
            Router.dispatch(`/`);
        });
};

function CreateMovieCard(movie) {
    let template = $("#sample-card");
    let block = template.clone();
    block.attr("id", "movie" + movie.id);
    block.attr("data-id", movie.id);
    block.attr("href", "/movie/" + movie.id);
    block.find(".film-poster-catalog").attr("src", movie.poster);
    block.find(".film-name").text(movie.name);
    block.find(".film-year").text(movie.year);
    block.find(".film-country").text(movie.country);
    block.find(".film-genre").text(`•${CalculateGenresString(movie)}`);
    let rating = СalculateMediumRating(movie);
    block.find(".film-rating").css({"backgroundColor": GetColorByRating(rating)});
    block.find(".film-rating").text(`Средняя оценка - ${rating}`);
    block.removeClass("d-none");
    $("#movies-catalog-container").append(block);
}

function InitMoviesNavigation(json) {
    if (json.pageInfo.currentPage == 1) {
        $("#page-item-back").attr("href", "/1");
        $("#page-item-first").attr("href", "/1").text("1");
        $("#page-item-second").attr("href", "/2").text("2");
        $("#page-item-third").attr("href", "/3").text("3");
        $("#page-item-next").attr("href", "/2");
        $("#page-item-first").parent().addClass("active");
    }
    else if (json.pageInfo.currentPage == json.pageInfo.pageCount) {
        $("#page-item-back").attr("href", `/${json.pageInfo.currentPage - 1}`);
        $("#page-item-first").attr("href", `/${json.pageInfo.currentPage - 2}`).text(json.pageInfo.currentPage - 2);
        $("#page-item-second").attr("href", `/${json.pageInfo.currentPage - 1}`).text(json.pageInfo.currentPage - 1);
        $("#page-item-third").attr("href", `/${json.pageInfo.currentPage}`).text(json.pageInfo.currentPage);
        $("#page-item-next").attr("href", `/${json.pageInfo.currentPage}`);
        $("#page-item-third").parent().addClass("active");
    }
    else {
        $("#page-item-back").attr("href", `/${json.pageInfo.currentPage - 1}`);
        $("#page-item-first").attr("href", `/${json.pageInfo.currentPage - 1}`).text(json.pageInfo.currentPage - 1);
        $("#page-item-second").attr("href", `/${json.pageInfo.currentPage}`).text(json.pageInfo.currentPage);
        $("#page-item-third").attr("href", `/${json.pageInfo.currentPage + 1}`).text(json.pageInfo.currentPage + 1);
        $("#page-item-next").attr("href", `/${json.pageInfo.currentPage + 1}`);
        $("#page-item-second").parent().addClass("active");
    }
}