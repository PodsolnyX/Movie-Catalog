import{NumberWithSpaces, CalculateGenresString, СalculateMediumRating, CalculateDateReview} from "./misc.js";
import{Router} from "./router.js"

$(document).ready(function () {
    LoadCatalogMovies();
});

export function LoadCatalogMovies() {
    fetch("https://react-midterm.kreosoft.space/api/movies/1")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            $("#movies-catalog-container").empty();
            let template = $("#sample-card");
            json.movies.forEach(function (movie, i, arr) {
                let block = template.clone();
                block.attr("id", "movie" + movie.id);
                block.attr("data-id", movie.id);
                block.attr("href", "/movie/" + movie.id);
                block.find(".film-poster-catalog").attr("src", movie.poster);
                block.find(".film-name").text(movie.name);
                block.find(".film-year").text(movie.year);
                block.find(".film-country").text(movie.country);
                block.find(".film-genre").text(`•${CalculateGenresString(movie)}`);
                block.find(".film-rating").text(`Средняя оценка - ${СalculateMediumRating(movie)}`);
                block.removeClass("d-none");
                $("#movies-catalog-container").append(block);
            });
            RegisterClickReferenceEvents();
        })
};

export function LoadDetailsMovie(id) {
    fetch(`https://react-midterm.kreosoft.space/api/movies/details/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((movie) => {
            let block = $("#movie-details-container");
            block.find(".film-poster").attr("src", movie.poster);
            block.find(".film-name").text(`${movie.name} (${movie.year})`);
            block.find(".film-year").text(movie.year);
            block.find(".film-country").text(movie.country);
            block.find(".film-genre").text(CalculateGenresString(movie));
            block.find(".film-time").text(`${movie.time} мин.`);
            block.find(".film-tagline").text(`«${movie.tagline}»`);
            block.find(".film-director").text(movie.director);
            block.find(".film-budget").text(`$${NumberWithSpaces(movie.budget)}`);
            block.find(".film-fees").text(`$${NumberWithSpaces(movie.fees)}`);
            block.find(".film-ageLimit").text(`${movie.ageLimit}+`);

            $("#reviews-container").empty();
            $("#reviews-container").text("Отзывов нет");

            let template = $("#sample-card-review");
            movie.reviews.forEach(function (review, i, arr) {
                $("#reviews-container").text("");
                let blockReview = template.clone();

                if (!review.isAnonymous && review.author != null && review.author.avatar != null) 
                    blockReview.find(".review-avatar").attr("src", review.author.avatar);
                if (!review.isAnonymous && review.author != null) {
                    blockReview.find(".review-nickname").text(review.author.nickName);
                }
                blockReview.find(".review-rating").text(review.rating);
                if (review.rating > 5) {
                    blockReview.find(".review-rating").addClass("bg-success");
                    blockReview.addClass("border-success");
                }
                else {
                    blockReview.find(".review-rating").addClass("bg-danger")
                    blockReview.addClass("border-danger");
                }

                blockReview.find(".review-date").text(CalculateDateReview(review.createDateTime));
                blockReview.find(".review-text").text(review.reviewText);
                blockReview.removeClass("d-none");
                $("#reviews-container").append(blockReview);
            });

        })
}

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