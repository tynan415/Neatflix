import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import{ requestVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()), 
    getVideos: () => dispatch(requestVideos())
});

export default connect(null, mapDispatchToProps)(HomePage);