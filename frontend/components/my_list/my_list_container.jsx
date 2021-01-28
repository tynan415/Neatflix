import { connect } from 'react-redux';
import  MyList from './my_list';
import { fetchList, addToList, deleteFromList } from '../../actions/my_list_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser.id,
    myList: Object.values(state.myList),
    videos: state.videos
})

const mDTP = (dispatch) => ({
    fetchList: () => dispatch(fetchList()),
    deleteFromList: (videoId) => dispatch(deleteFromList(videoId)),
    addToList: (videoId) => dispatch(addToList(videoId))
})

export default connect(mSTP, mDTP)(MyList);