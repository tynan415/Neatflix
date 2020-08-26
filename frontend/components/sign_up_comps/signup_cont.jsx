import { connect } from 'react-redux';
import SignUp from './signup.jsx';
import { login,  signup } from '../../actions/session_actions'


const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SignUp);