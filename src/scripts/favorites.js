import { CalculateGenresString, СalculateMediumRating, GetColorByRating } from "./misc.js";
import { api } from "../api.js";

export function LoadFavoritesMovies() {
    fetch(`${api}/api/favorites`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Ошибка");
        })
        .then(json => {
            json.movies.forEach(function (movie, i, arr) {
                CreateMovieCard(movie);
            });
        })
        .catch(err => {
            alert(err);
        });
};

function CreateMovieCard(movie) {
    let template = $("#sample-card");
    $("#favorites-empty").addClass("d-none");
    let block = template.clone();
    block.attr("id", "movie" + movie.id);
    block.attr("data-id", movie.id);
    block.find(".poster-container").attr("href", "/movie/" + movie.id);
    block.find(".info-container").attr("href", "/movie/" + movie.id);
    block.find(".film-poster-catalog").attr("src", movie.poster);
    block.find(".film-name").text(movie.name);
    block.find(".film-year").text(movie.year);
    block.find(".film-country").text(movie.country);
    block.find(".film-genre").text(`•${CalculateGenresString(movie)}`);
    let rating = СalculateMediumRating(movie);
    block.find(".film-rating").css({"backgroundColor": GetColorByRating(rating)});
    block.find(".film-rating").text(`Средняя оценка - ${rating}`);
    block.find(".btn-delete-favorites").click(function () { DeleteMovieFromFavorites(movie.id) })
    block.removeClass("d-none");
    $("#movies-favorites-container").append(block);
}

export function AddMovieToFavorites(id) {
    fetch(`${api}/api/favorites/${id}/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`
        }
    })
        .then(response => location.reload())
        .catch(err => {
            alert("Ошибка");
        });
}

export function IsMovieFavorites(id) {
    return fetch(`${api}/api/favorites`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`
        }
    })
        .then(response => response.json())
        .then(json => {
            let flag = false;
            json.movies.forEach(function (movie, i, arr) {
                if (movie.id == id)
                    flag = true;
            });
            return flag;
        })
        .catch(err => {
            alert("Ошибка");
        });
}

export function DeleteMovieFromFavorites(id) {
    fetch(`${api}/api/favorites/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`
        }
    })
        .then(response => location.reload())
        .catch(err => {
            alert("Ошибка");
        });
}