import { connect } from 'react-redux';
import SplashPage from './splashpage';
import { login } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SplashPage);