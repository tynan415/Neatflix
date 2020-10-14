import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer'

const rootReducer = combineReducers({
    session: SessionReducer,
    users: usersReducer,
    errors: errorsReducer
});

export default rootReducer;