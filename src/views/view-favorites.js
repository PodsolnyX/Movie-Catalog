export default () => `
    <main class="container">
        <div class="card card-movie-catalog text-decoration-none text-black" id="sample-card">
            <div class="card-body row">
                <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3  d-flex justify-content-center">
                    <img src="" class="img-fluid film-poster-catalog" alt="" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-7 col-sm-9 col-12 d-flex flex-column align-items-start">
                    <div class="d-flex flex-column">
                        <div class="film-name fs-4"></div>
                        <div class="film-year"></div>
                        <div class="d-flex mb-1">
                            <div class="film-country"></div>
                            <div class="film-genre"></div>
                        </div>
                        <div class="d-flex align-items-start">
                            <div class="film-rating badge bg-primary text-wrap text-start"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm d-flex align-items-center">
                    <div class="btn btn-danger mt-2">Удалить из избранного</div>
                </div>
            </div>
        </div>
    </main>
`