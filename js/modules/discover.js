import { create, multyAppend } from "../utils/helpers.js";

export function discover() {
    const mainDiscover = create('div', 'main__discover discover-main');
    const discoverMainTitle = create('h2', 'discover-main__title');
    const discoverMainSubtitle = create('h3', 'discover-main__subtitle');
    const discoverMainImg = create('img', 'discover-main__img');
    multyAppend(mainDiscover, [discoverMainTitle, discoverMainSubtitle, discoverMainImg]);
    discoverMainTitle.innerText = 'Welcome.'
    discoverMainSubtitle.innerText = 'Millions of movies, TV shows and people to discover. Explore now.';
    discoverMainImg.setAttribute('src', 'https://images.pexels.com/photos/3910141/pexels-photo-3910141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

    return mainDiscover;
}