import { create, multyAppend } from "../utils/helpers.js";


export function movieItemPreview(movie, handleGetMovie) {
    const {
        id,
        backdrop_path,
        title,
        release_date
    } = movie;
    const moviesItem = create('div', 'movies__item item-movies');
    const itemImgWrapper = create('div', 'item-movies__img');
    const itemImg = create('img');
    const itemContent = create('div', 'item-movies__content');
    const itemName = create('h2', 'item-movies__name');
    const itemDate = create('p', 'item-movies__date');

    multyAppend(moviesItem, [itemImgWrapper, itemContent]);
    multyAppend(itemContent, [itemName, itemDate]);

    itemImgWrapper.append(itemImg);
    itemImg.setAttribute('src', `https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`);
    itemImg.setAttribute('alt', title);
    itemName.innerText = title;
    const date = new Date(release_date);
    itemDate.innerText = `${date.toString().slice(4, 10)}, ${date.getFullYear()}`;

    itemImgWrapper.onclick = (e) => {
        e.preventDefault();
        handleGetMovie(movie);

    }
    itemName.onclick = (e) => {
        e.preventDefault();
        handleGetMovie(movie);
    }

    return moviesItem;
}

