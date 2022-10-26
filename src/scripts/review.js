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

export async function AddNewReview(movieId) {
    if ($("#inputTextReview").val() == "") {
        alert("Текст отзыва пустой")
        return;
    }
    const reviewData = {
        reviewText: $("#inputTextReview").val(),
        rating: $("#inputRating").val(),
        isAnonymous: $("#inputAnonymous").is(':checked') ? true : false
    }
    const response = await fetch(`https://react-midterm.kreosoft.space/api/movie/${movieId}/review/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
        body: JSON.stringify(reviewData)
    });
    if (response.ok) {
        location.reload();
    }
    else {
        alert("О, нет!");
    }

}

export async function DeleteReview(movieId, reviewId) {
    const response = await fetch(`https://react-midterm.kreosoft.space/api/movie/${movieId}/review/${reviewId}/delete`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        }
    });
    if (response.ok) {
        location.reload();
    }
    else {
        alert("О, нет!");
    }
}

export async function EditReview(movieId, reviewId) {
    if ($("#inputTextReview").val() == "") {
        alert("Текст отзыва пустой")
        return;
    }
    console.log($("#inputAnonymous").is(':checked'))
    const reviewData = {
        reviewText: $("#inputTextReview").val(),
        rating: $("#inputRating").val(),
        isAnonymous: $("#inputAnonymous").is(':checked') ? true : false
    }
    const response = await fetch(`https://react-midterm.kreosoft.space/api/movie/${movieId}/review/${reviewId}/edit`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("JWT")
        },
        body: JSON.stringify(reviewData)
    });
    if (response.ok) {
        location.reload();
    }
    else {
        alert((await response.json()).message);
    }
}