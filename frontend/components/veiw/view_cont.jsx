import View from './view';
import { requestVideo } from '../../actions/video_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { requestVideos } from '../../actions/video_actions';
import { requestGenreTypes } from '../../actions/genre_type_actions';
import { fetchList, addToList, deleteFromList } from '../../actions/my_list_actions';

const mSTP = (state, ownProps) => ({
    video: state.videos[ownProps.match.params.videoId],
    // videos: Object.values(state.videos),
    myList: Object.values(state.myList),
    genres: state.genreType,
})

const mDTP = dispatch => ({
    requestVideo: videoId => dispatch(requestVideo(videoId)),
    fetchList: () => dispatch(fetchList()),
    getVideos: () => dispatch(requestVideos()),
    requestGenres: () => dispatch(requestGenreTypes())
});

export default withRouter(connect(mSTP, mDTP)(View));