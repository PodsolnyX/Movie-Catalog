import { CalculateGenresString, СalculateMediumRating } from "./misc.js";
import {api} from "../api.js";

export async function LoadFavoritesMovies() {
    const response = await fetch(`${api}/api/favorites`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
    })
    const json = await response.json();

    let template = $("#sample-card");
    json.movies.forEach(function (movie, i, arr) {
        $("#favorites-empty").addClass("d-none");
        let block = template.clone();
        block.attr("id", "movie" + movie.id);
        block.attr("data-id", movie.id);
        block.find(".film-poster-catalog").attr("src", movie.poster);
        block.find(".film-name").text(movie.name);
        block.find(".film-year").text(movie.year);
        block.find(".film-country").text(movie.country);
        block.find(".film-genre").text(`•${CalculateGenresString(movie)}`);
        block.find(".film-rating").text(`Средняя оценка - ${СalculateMediumRating(movie)}`);
        block.find(".btn-delete-favorites").click(function () { DeleteMovieFromFavorites(movie.id) })
        block.removeClass("d-none");
        $("#movies-favorites-container").append(block);
    });
};

export async function AddMovieToFavorites(id) {
    const response = await fetch(`${api}/api/favorites/${id}/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
    })
    location.reload();
}

export async function IsMovieFavorites(id) {
    const response = await fetch(`${api}/api/favorites`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
    })
    const json = await response.json();
    let flag = false;
    json.movies.forEach(function (movie, i, arr) {
        if (movie.id == id)
            flag = true;
    });
    return flag;
}

export async function DeleteMovieFromFavorites(id) {
    const response = await fetch(`${api}/api/favorites/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
    })
    location.reload();
}