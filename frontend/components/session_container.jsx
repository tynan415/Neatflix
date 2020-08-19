import { connect } from 'react-redux';
import Session from './session.jsx';
import { logout, login,  signup } from '../actions/session_actions'




const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Session);
