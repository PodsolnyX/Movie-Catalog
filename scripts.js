$(document).ready(function(){
    LoadMovies();
});

function LoadMovies(){
    fetch("https://react-midterm.kreosoft.space/api/movies/1")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        $("#movies-container").empty();
        let template = $("#sample-card");
        json.movies.forEach(function(movie, i, arr){
            let block = template.clone();
            block.find(".film-poster").attr("src", movie.poster);
            block.find(".film-name").text(movie.name);
            block.find(".film-year").text(movie.year);
            block.find(".film-country").text(movie.country);
            block.find(".film-genre").text(`•${CalculateGenresString(movie)}`);
            block.find(".film-rating").text(`Средняя оценка - ${СalculateMediumRating(movie)}`);
            block.removeClass("d-none");
            $("#movies-container").append(block);
        });
    })
};

function CalculateGenresString(movie) {
    let genres = "";

    movie.genres.forEach(function(genre, i, arr){
        if (i == arr.length - 1) 
            genres += genre.name
        else
            genres += genre.name + ", ";
    });

    return genres;
}

function СalculateMediumRating(movie) {
    let rating = 0;

    movie.reviews.forEach(function(review, i, arr){
        rating += review.rating;
    });

    if (movie.reviews.length != 0) {
        rating /= movie.reviews.length;
        rating.toFixed(1);
    }

    return rating
}