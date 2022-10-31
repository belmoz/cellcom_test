import { showNowPlaying, showPopular } from "../api/apiMovies.js";
import { pathFavourites, pathPlaying, pathPopular } from "../utils/constants.js";
import { create } from "../utils/helpers.js";
import { movieItemPreview } from "./movieItemPreview.js";





export function listMovies(
    page,
    path,
    handleGetMovie,
    handleGetTotalPages,
    favourites
) {
    const moviesList = create('div', 'main__movies movies');
    switch (path) {
        case pathPopular:
            showPopular(page)
                .then(data => {
                    const movies = data.results;
                    handleGetTotalPages(data.total_pages);
                    movies.forEach(movie => {
                        moviesList.append(movieItemPreview(movie, handleGetMovie));
                    });
                });

            break;
        case pathPlaying:
            showNowPlaying(page)
                .then(data => {
                    const movies = data.results;
                    handleGetTotalPages(data.total_pages);
                    movies.forEach(movie => {
                        moviesList.append(movieItemPreview(movie, handleGetMovie));
                    });
                });
            break;
        case pathFavourites:
            favourites.forEach(movie => {
                handleGetTotalPages(1);
                moviesList.append(movieItemPreview(movie, handleGetMovie));
            });

            break;
        default: return;
    }

    return moviesList;
}