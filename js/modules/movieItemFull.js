import { create, multyAppend } from "../utils/helpers.js";



export function movieItemFull(
    movie,
    handleCloseMovie,
    isFavourite,
    handleGetFavourite
) {
    const {
        title,
        poster_path,
        overview,
        release_date
    } = movie;

    const moviePage = create('div', 'main__movie movie-main');
    const movieClose = create('button', 'movie-main__close');
    const moviePosterWrapper = create('div', 'movie-main__img');
    const moviePoster = create('img');
    const movieContent = create('div', 'movie-main__content movie-content');
    const movieContentTopRow = create('div', 'movie-content__toprow');
    const movieContentTopRowTitle = create('div', 'movie-content__title');
    const movieContentTopRowBtns = create('div', 'movie-content__btns');
    const movieContentTopRowName = create('div', 'movie-content__name');
    const movieContentTopRowDate = create('div', 'movie-content__date');
    const movieContentTopRowFavourite = create('button', 'movie-content__btn favourites-btn');
    const movieContentMain = create('div', 'movie-content__main');
    const movieContentMainOverviewTitle = create('h3', 'movie-content__overview');
    const movieContentMainOverviewText = create('p', 'movie-content__text');

    multyAppend(moviePage, [moviePosterWrapper, movieContent]);
    moviePosterWrapper.append(moviePoster);
    moviePoster.setAttribute('src', `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`);

    multyAppend(movieContent, [movieContentTopRow, movieContentMain]);
    multyAppend(movieContentTopRow, [movieContentTopRowTitle, movieContentTopRowBtns]);
    multyAppend(movieContentTopRowTitle, [movieContentTopRowName, movieContentTopRowDate]);
    multyAppend(movieContentTopRowBtns, [movieContentTopRowFavourite, movieClose]);
    movieClose.innerText = '✖';
    multyAppend(movieContentMain, [movieContentMainOverviewTitle, movieContentMainOverviewText]);

    movieContentTopRowName.innerText = title;
    const date = new Date(release_date);
    movieContentTopRowDate.innerText = `(${date.getFullYear()})`;
    movieContentTopRowFavourite.innerText = isFavourite ? 'Remove from Favourites' : 'Add to Favourites';
    isFavourite ? movieContentTopRowFavourite.classList.add('is_favourite') : movieContentTopRowFavourite.classList.remove('is_favourite');
    movieContentMainOverviewTitle.innerText = 'Overview:';
    movieContentMainOverviewText.innerText = overview;

    movieContentTopRowFavourite.onclick = (e) => {
        e.preventDefault();
        handleGetFavourite(isFavourite, movie);
    }

    movieClose.onclick = (e) => {
        e.preventDefault();
        handleCloseMovie();
    }

    return moviePage;
}