import { pathFavourites } from "../utils/constants.js";
import { create } from "../utils/helpers.js";
import { discover } from "./discover.js";
import { filter } from "./filter.js";
import { listMovies } from "./listMovies.js";
import { movieItemFull } from "./movieItemFull.js";
import { paginator } from "./paginator.js";


export function main(
    handleChangePath,
    handleChangePage,
    handleGetTotalPages,
    handleGetMovie,
    handleCloseMovie,
    handleGetFavourite,
    path,
    page,
    totalPages,
    movie,
    isFavourite,
    favourites
) {
    const mainPage = create('main', 'main');
    const mainContainer = create('div', 'main__container container');
    const warnText = create('h2', 'warning__favourites');
    warnText.innerText = "What is your favourite scary movie?";
    if (movie.opened) {
        mainContainer.append(movieItemFull(movie.info, handleCloseMovie, isFavourite, handleGetFavourite));
    } else {
        mainContainer.append(discover());
        mainContainer.append(filter(path, handleChangePath));
        if (favourites.length <= 0 && path === pathFavourites) {
            mainContainer.append(warnText);
        } else {
            mainContainer.append(paginator(page, totalPages, handleChangePage));
            mainContainer.append(listMovies(page, path, handleGetMovie, handleGetTotalPages, favourites));
            mainContainer.append(paginator(page, totalPages, handleChangePage));
        }
    }
    mainPage.append(mainContainer);
    return mainPage;
}
