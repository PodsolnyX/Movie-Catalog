import{NumberWithSpaces, CalculateGenresString, CalculateDateReview} from "./misc.js";
import{IsMovieFavorites, AddMovieToFavorites, DeleteMovieFromFavorites} from "./favorites.js";

export function LoadDetailsMovie(id) {
    fetch(`https://react-midterm.kreosoft.space/api/movies/details/${id}`)
        .then((response) => {
            return response.json();
        })
        .then(async (movie) => {
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

            const user = JSON.parse(localStorage.getItem("user"));

            if (user.auth == true) {
                $("#btnFavorites").removeClass("d-none");
                if (!(await IsMovieFavorites(id))) {
                    $("#btnFavorites").text("Добавить в избранное");
                    $("#btnFavorites").addClass("btn-outline-primary");
                    $("#btnFavorites").click(function () { AddMovieToFavorites(id) });
                }
                else {
                    $("#btnFavorites").text("Удалить из избранного");
                    $("#btnFavorites").addClass("btn-outline-danger");
                    $("#btnFavorites").click(function () { DeleteMovieFromFavorites(id) });
                }
            }

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

