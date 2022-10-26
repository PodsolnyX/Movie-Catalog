import { NumberWithSpaces, CalculateGenresString, CalculateDateReview } from "./misc.js";
import { IsMovieFavorites, AddMovieToFavorites, DeleteMovieFromFavorites } from "./favorites.js";
import { IsUserReview, AddNewReview, DeleteReview, EditReview} from "./review.js";

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
            if (movie.budget != null) block.find(".film-budget").text(`$${NumberWithSpaces(movie.budget)}`);
            if (movie.fees != null) block.find(".film-fees").text(`$${NumberWithSpaces(movie.fees)}`);
            block.find(".film-ageLimit").text(`${movie.ageLimit}+`);

            const user = JSON.parse(localStorage.getItem("user"));
            let indexUserReview = -1;

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

                indexUserReview = IsUserReview(user.userData.id, movie.reviews)
                if (indexUserReview == -1) {
                    $("#formAddReview").removeClass("d-none");
                    $("#btnSave").click(function () { AddNewReview(id) });
                }
            };

            if (indexUserReview != -1) CreateReviewCard(movie.reviews[indexUserReview], id, true);

            movie.reviews.forEach(function (review, i, arr) {
                if (i != indexUserReview) CreateReviewCard(review);
            });

        })
}

function ShowEditReviewCard(movieId, review) {
    $("#labelFormReview").text("Редактировать отзыв");
    $("#formAddReview").removeClass("d-none");
    $("#inputTextReview").val(review.reviewText);
    $("#inputRating").val(review.rating);
    if (review.isAnonymous) $("#inputAnonymous").prop("checked", true);
    $("#btnSave").click(function () { EditReview(movieId, review.id) });
}

function CreateReviewCard(review, movieId, isUser = false) {
    let template = $("#sample-card-review");
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

    if (isUser == true) {
        blockReview.find(".card-footer").removeClass("d-none");
        blockReview.find(".btn-delete-rewiew").click(function () { DeleteReview(movieId, review.id) });
        blockReview.find(".btn-edit-rewiew").click(function () { ShowEditReviewCard(movieId, review) });
    }
    blockReview.removeClass("d-none");
    $("#reviews-container").append(blockReview);
}



