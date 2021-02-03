import { connect } from 'react-redux';
import Navbar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) =>{
    return {
    search: ownProps.match.params.query
}}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);