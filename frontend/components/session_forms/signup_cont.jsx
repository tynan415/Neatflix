import { connect } from 'react-redux';
import SignUp from './signup.jsx';
import { login,  signup, logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    email: ownProps.match.params.email,
    errors: state.errors.session,
    formType: 'signup/'
});

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mapDispatchToProps)(SignUp);