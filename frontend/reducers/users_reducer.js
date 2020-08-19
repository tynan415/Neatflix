import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let nextState = Object.assign({}, oldState, { [action.user.id]: action.user })
            return nextState;
        default:
            return oldState;
    }
}

export default usersReducer;