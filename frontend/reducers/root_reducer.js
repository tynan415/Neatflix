import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    users: usersReducer,
});

export default rootReducer;