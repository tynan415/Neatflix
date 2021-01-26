import { connect } from 'react-redux';
import Navbar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) =>{
    // console.log(ownProps.match.params.query)
    return {
    search: ownProps.match.params.query
}}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);