import { connect } from 'react-redux';
import Video from './video';

const mSTP = (state, ownProps) => ({
    onList: !!state.myList[ownProps.id]
})


export default connect(mSTP, null)(Video);