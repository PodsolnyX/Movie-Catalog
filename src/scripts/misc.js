export function NumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        rating.toFixed(1);
    }

    return rating
}