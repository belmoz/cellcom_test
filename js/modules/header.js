import { create } from "../utils/helpers.js";

export function header() {
    const header = create('header', 'header');
    const headerContainer = create('div', 'header__container container');
    const headerLogo = create('div', 'header__logo');
    const headerLogoValue = 'TMDB'
    header.append(headerContainer);
    headerContainer.append(headerLogo);
    headerLogo.innerText = headerLogoValue
    return header;
}