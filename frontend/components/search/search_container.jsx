import { connect } from 'react-redux';
import SearchPage from './search';
import { requestVideos } from '../../actions/video_actions';
import { addToList } from '../../actions/my_list_actions';


const mSTP = (state, ownProps) => {
    console.log(ownProps.match.params.query)
    return {
        videos: Object.values(state.videos),
        search: ownProps.match.params.query
    }
}

const mDTP = (dispatch) => ({
    requestVideos: () => dispatch(requestVideos()),
    addToList: (videoId) => dispatch(addToList(videoId))
})

export default connect(mSTP, mDTP)(SearchPage);