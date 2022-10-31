import { showPopular } from "./api/apiMovies.js";
import { setFavourites, setFavouritesId, setFavouritesIdToState, setFavouritesToState } from "./api/storage.js";
import { header } from "./modules/header.js";
import { main } from "./modules/main.js";
import { pathPopular } from "./utils/constants.js";

const root = document.querySelector('#root');

const state = {
    path: pathPopular,
    page: 1,
    total_pages: 0,
    total_results: 0,
    movie: {
        opened: false,
        info: null
    },
    favouritesId: [],
    favourites: []
}

function handleChangePath(path) {
    state.path = path;
    state.page = 1;
    render();
}
function handleChangePage(newPage) {
    state.page = newPage;
    render();
}
function handleGetTotalPages(totalPages) {
    state.total_pages = totalPages;
}
function handleGetMovie(movie) {
    if (state.favouritesId.includes(movie.id)) {
        state.movie.favourite = true;
    } else {
        state.movie.favourite = false;
    }
    state.movie.info = movie;
    state.movie.opened = true;
    render();
}
function handleCloseMovie() {
    state.movie.opened = false;
    render();
}
function handleGetFavourite(favourite, movie) {

    state.movie.favourite = !favourite;
    setFavouritesId(state);
    setFavourites(state, movie);
    render();
}


render();


export function render() {
    setFavouritesIdToState(state);
    setFavouritesToState(state);
    root.innerHTML = '';
    root.append(header());

    root.append(main(
        handleChangePath,
        handleChangePage,
        handleGetTotalPages,
        handleGetMovie,
        handleCloseMovie,
        handleGetFavourite,
        state.path,
        state.page,
        state.total_pages,
        state.movie,
        state.movie.favourite,
        state.favourites
    ));
}