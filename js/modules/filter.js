import { create, multyAppend } from "../utils/helpers.js";

export function filter(path, handleChangePath) {

    const moviesFilter = create('div', 'main__filter filter-main');

    const moviesFilterPopular = create('div', 'filter-main__item');
    const moviesFilterPlaying = create('div', 'filter-main__item');
    const moviesFilterFavourites = create('div', 'filter-main__item');

    const moviesFilterPopularLink = create('a', 'filter-main__link');
    const moviesFilterPlayingLink = create('a', 'filter-main__link');
    const moviesFilterFavouritesLink = create('a', 'filter-main__link');

    moviesFilterPopularLink.innerText = 'popular';
    moviesFilterPlayingLink.innerText = 'now playing';
    moviesFilterFavouritesLink.innerText = 'favourites';

    moviesFilterPopularLink.setAttribute('href', 'popular');
    moviesFilterPlayingLink.setAttribute('href', 'playing');
    moviesFilterFavouritesLink.setAttribute('href', 'favourites');

    moviesFilterPopular.append(moviesFilterPopularLink);
    moviesFilterPlaying.append(moviesFilterPlayingLink);
    moviesFilterFavourites.append(moviesFilterFavouritesLink);

    multyAppend(moviesFilter, [moviesFilterPopular, moviesFilterPlaying, moviesFilterFavourites])
    const classLink = moviesFilter.querySelector(`a[href=${path}]`);
    classLink.classList.add('active')
    moviesFilter.onclick = (e) => {
        e.preventDefault();
        if (e.target.localName === 'a' && e.target.getAttribute('href') !== path) {
            handleChangePath(e.target.getAttribute('href'));
        }
    }

    return moviesFilter
}