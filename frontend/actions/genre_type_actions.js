import { fetchGenreTypes } from '../util/genre_api_util';

export const FETCH_GENRE_TYPES = "FETCH_GENRE_TYPES";

const receiveGenreTypes = genreTypes => ({
    type: FETCH_GENRE_TYPES,
    genreTypes
});

export const requestGenreTypes = () => dispatch => {
    return fetchGenreTypes().then(genreTypes => dispatch(receiveGenreTypes(genreTypes)));
};