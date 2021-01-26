import { connect } from 'react-redux';
import SearchPage from './search';
import { requestVideos } from '../../actions/video_actions';
import { requestGenreTypes } from '../../actions/genre_type_actions';


const mSTP = (state, ownProps) => {
    
    return {
        videos: Object.values(state.videos),
        search: ownProps.match.params.query
    }
}

const mDTP = (dispatch) => ({
    requestVideos: () => dispatch(requestVideos())
})

export default connect(mSTP, mDTP)(SearchPage);