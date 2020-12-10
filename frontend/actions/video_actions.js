import *  as VideoApiUtil from '../util/videos_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';

const receiveAllVideos = videos =>({
    type: RECEIVE_ALL_VIDEOS,
    videos
});

const receiveVideo = video =>({
    type: RECEIVE_VIDEO,
    video
});

export const requestVideo = (videoId) => dispatch => (
    VideoApiUtil.fetchVideo(videoId)
    .then((video) => dispatch(receiveVideo(video)))
);

export const requestVideos = () => dispatch =>(
    VideoApiUtil.fetchAllVideos()
    .then((videos) => dispatch(receiveAllVideos(videos)))
);
