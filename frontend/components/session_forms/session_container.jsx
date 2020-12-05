import { connect } from 'react-redux';
import SignIn from './signIn.jsx';
import { logout, login,  signup } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login/'
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
