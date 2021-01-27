import * as ListAPI from '../util/my_list_api_util';

export const FETCH_MY_LIST = "FETCH_MY_LIST";
export const ADD_TO_MY_LIST = "ADD_TO_MY_LIST";
export const DELETE_FROM_MY_LIST = "DELETE_FROM_MY_LIST";

const fetchMyList = (videos) => ({
    type: FETCH_MY_LIST,
    videos
});

const addToMyList = (videoId) => ({
    type: ADD_TO_MY_LIST,
    videoId
});

const deleteFromMyList = (videoId) => ({
    type: DELETE_FROM_MY_LIST,
    videoId
});

export const fetchList = () => dispatch => (
    ListAPI.fetchList()
    .then(videos => dispatch(fetchMyList(videos)))
);

export const addToList = (videoId) => dispatch => (
    ListAPI.addToList(videoId)
    .then(videoId => dispatch(addToMyList(videoId)))
);

export const deleteFromList = (videoId) => dispatch => (
    ListAPI.deleteFromList(videoId)
    .then(videoId => dispatch(deleteFromMyList(videoId)))
);
