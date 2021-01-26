import { FETCH_MY_LIST, ADD_TO_MY_LIST, DELETE_FROM_MY_LIST} from '../actions/my_list_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case FETCH_MY_LIST:
            return action.videos
        case ADD_TO_MY_LIST:
            return Object.assign({}, oldState, { [action.videoId.video_id]: action.videoId })
        case DELETE_FROM_MY_LIST:
            let newState = Object.assign({}, oldState);
            delete newState[action.videoId.video_id];
            return newState;
        default:
            return oldState;
    }
}