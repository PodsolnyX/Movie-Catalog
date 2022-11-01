export function NumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function CalculateDateReview(dateTime){
    return `${dateTime.slice(8,10)}.${dateTime.slice(5,7)}.${dateTime.slice(0,4)}`
}

export function CalculateGenresString(movie) {
    let genres = "";

    movie.genres.forEach(function (genre, i, arr) {
        if (i == arr.length - 1)
            genres += genre.name
        else
            genres += genre.name + ", ";
    });

    return genres;
}

export function СalculateMediumRating(movie) {
    let rating = 0;

    movie.reviews.forEach(function (review, i, arr) {
        rating += review.rating;
    });

    if (movie.reviews.length != 0) {
        rating /= movie.reviews.length;
        rating = rating.toFixed(1);
    }

    return rating
}

export function GetColorByRating(value){
    if (value < 5) {
        return "#dc3545";
    }
    else if (value < 7) {
        return "#777777";
    }
    else {
        return "#3bb33b";
    }
}