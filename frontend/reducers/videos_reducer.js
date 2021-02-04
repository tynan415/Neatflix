import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions'

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            return Object.assign({}, oldState, {[action.video.id]: action.video});
            // if action.video.set then we need to Object.assign under correct key
        default:
            return oldState;
    }
}

export default videosReducer;