import { favourites, favouritesId } from "../utils/constants.js";

export const setFavouritesIdToState = (state) => {
    const data = JSON.parse(localStorage.getItem(favouritesId)) || [];
    state.favouritesId = data
}

export const setFavouritesId = (state) => {
    const data = JSON.parse(localStorage.getItem(favouritesId)) || [];
    const index = data.findIndex(el => el === state.movie.info.id);
    if (state.movie.favourite && index < 0) {
        data.push(state.movie.info.id);
        localStorage.setItem(favouritesId, JSON.stringify(data));
    } else {
        data.splice(index, 1);
        localStorage.setItem(favouritesId, JSON.stringify(data));
    }
}

export const setFavouritesToState = (state) => {
    const data = JSON.parse(localStorage.getItem(favourites)) || [];
    state.favourites = data
}

export const setFavourites = (state, movie) => {
    const data = JSON.parse(localStorage.getItem(favourites)) || [];
    const index = data.findIndex(el => el.id === state.movie.info.id);
    if (state.movie.favourite && index < 0) {
        data.push(movie);
        localStorage.setItem(favourites, JSON.stringify(data));
    } else {
        data.splice(index, 1);
        localStorage.setItem(favourites, JSON.stringify(data));
    }
}

// export const showFavourites = () => {
//     console.log(first)
//     return JSON.parse(localStorage.getItem(favourites)) || [];
// }