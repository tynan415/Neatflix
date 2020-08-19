import { connect } from 'react-redux';
import Session from './session.jsx';
import { logout, login,  signup } from '../actions/session_actions'


const mapStateToProps = ({ entities , session }) => ({
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
