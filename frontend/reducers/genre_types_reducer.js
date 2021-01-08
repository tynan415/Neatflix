import { FETCH_GENRE_TYPES } from '../actions/genre_type_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case FETCH_GENRE_TYPES:
            return action.genreTypes;
        default:
            return oldState;

    }    
};