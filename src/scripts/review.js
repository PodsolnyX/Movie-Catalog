import { api } from "../api.js";

export function IsUserReview(userId, reviews) {
    let index = -1;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].author != null && reviews[i].author.userId == userId) {
            index = i;
            break;
        }
    }
    return index;
}

export function AddNewReview(movieId) {
    if ($("#inputTextReview").val() == "") {
        alert("Текст отзыва пустой")
        return;
    }

    const reviewData = {
        reviewText: $("#inputTextReview").val(),
        rating: $("#inputRating").val(),
        isAnonymous: $("#inputAnonymous").is(':checked') ? true : false
    }

    fetch(`${api}/api/movie/${movieId}/review/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
        body: JSON.stringify(reviewData)
    })
        .then(response => {
            if (response.ok) {
                return location.reload();
            }
            throw new Error("Ошибка добавления отзыва");
        })
        .catch(err => {
            alert(err);
        });
}

export function DeleteReview(movieId, reviewId) {
    fetch(`${api}/api/movie/${movieId}/review/${reviewId}/delete`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        }
    })
        .then(response => {
            if (response.ok) {
                return location.reload();
            }
            throw new Error("Ошибка удаления отзыва");
        })
        .catch(err => {
            alert(err);
        });
}

export function EditReview(movieId, reviewId) {
    if ($("#inputTextReview").val() == "") {
        alert("Текст отзыва пустой")
        return;
    }

    const reviewData = {
        reviewText: $("#inputTextReview").val(),
        rating: $("#inputRating").val(),
        isAnonymous: $("#inputAnonymous").is(':checked') ? true : false
    }

    fetch(`${api}/api/movie/${movieId}/review/${reviewId}/edit`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
        body: JSON.stringify(reviewData)
    })
        .then(response => {
            if (response.ok) {
                return location.reload();
            }
            throw new Error("Ошибка редактирования отзыва");
        })
        .catch(err => {
            alert(err);
        });
}