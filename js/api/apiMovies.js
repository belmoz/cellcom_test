export const API_KEY = 'api_key=2c46288716a18fb7aadcc2a801f3fc6b';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const showPopular = async (page) => {
    const response = await fetch(`${BASE_URL}/movie/popular?${API_KEY}&page=${page}`);
    let body;
    try {
        if (response.ok) {
            body = await response.json();
        } else {
            throw (response.statusText);
        }
    } catch (error) {
        console.log(error);
        return error;
    }
    return body;
}

export const showNowPlaying = async (page) => {
    const response = await fetch(`${BASE_URL}/movie/now_playing?${API_KEY}&page=${page}`);
    let body;
    try {
        if (response.ok) {
            body = await response.json();
        } else {
            throw (response.statusText);
        }
    } catch (error) {
        console.log(error);
        return error;
    }
    return body;
}
