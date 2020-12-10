import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (oldState = { id: null }, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.currentUser = action.current_user;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState.currentUser = null;
            return nextState;
        default:
            return oldState;
    }
};

export default SessionReducer;