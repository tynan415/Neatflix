import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import SessionReducer from './session_reducer';
import videosReducer from './videos_reducer';
import errorsReducer from './errors_reducer';
import genreTypeReducer from './genre_types_reducer';
import myListReducer from './my_list_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    users: usersReducer,
    videos: videosReducer,
    errors: errorsReducer,
    genreType: genreTypeReducer,
    myList: myListReducer
    });

export default rootReducer;