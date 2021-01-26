import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { requestVideos } from '../../actions/video_actions';
import { requestGenreTypes } from '../../actions/genre_type_actions';

const mapStateToProps = (state) => ({
    videos: Object.values(state.videos),
    genres: state.genreType,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()), 
    getVideos: () => dispatch(requestVideos()),
    requestGenres: () => dispatch(requestGenreTypes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);