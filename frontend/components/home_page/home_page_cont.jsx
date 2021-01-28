import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { requestVideos } from '../../actions/video_actions';
import { requestGenreTypes } from '../../actions/genre_type_actions';
import { fetchList, addToList, deleteFromList } from '../../actions/my_list_actions';

const mapStateToProps = (state) => ({
    videos: Object.values(state.videos),
    myList: Object.values(state.myList),
    genres: state.genreType,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()), 
    fetchList: () => dispatch(fetchList()),
    getVideos: () => dispatch(requestVideos()),
    requestGenres: () => dispatch(requestGenreTypes()),
    addToList: (videoId) => dispatch(addToList(videoId)),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId))   
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);