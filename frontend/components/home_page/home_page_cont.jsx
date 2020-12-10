import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(HomePage);