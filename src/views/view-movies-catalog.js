export default () => `
    <a class="card card-movie-catalog d-none text-decoration-none text-black" id="sample-card">
        <div class="card-body row">
            <div class="col-xl-1 col-lg-2 col-md-2 col-sm-3  d-flex justify-content-center">
                <img src="" class="img-fluid film-poster-catalog" alt="" />
            </div>
            <div class="col-xl-9 col-lg-8 col-md-8 col-sm-9 col-12 d-flex flex-column justify-content-between">
                <div class="d-flex flex-column">
                    <div class="film-name fs-4"></div>
                    <div class="film-year"></div>
                </div>
                <div class="d-flex mb-1">
                    <div class="film-country"></div>
                    <div class="film-genre"></div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm d-flex align-items-center">
                <div class="film-rating badge bg-primary text-wrap"></div>
            </div>
        </div>
    </a>

    <main class="container" id="movies-catalog-container"></main>
    <nav class="container pb-5" id="movies-nav-container">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="" aria-label="Предыдущая">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="/1">1</a></li>
                <li class="page-item"><a class="page-link" href="/2">2</a></li>
                <li class="page-item"><a class="page-link" href="/3">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Следующая">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
`