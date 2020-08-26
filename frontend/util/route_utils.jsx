// import React from 'react';
// import { connect } from 'react-dom';
// import { Redirect, Route, withRouter } from 'react-router-dom';

// const mSTP = state => ({
//     loggedIn: Boolean(state.session.currentUser)
// });

// const Auth = ({ loggedIn, path , component: Component }) => (
//     <Route
//         path={path}
//         render={props => {
//             loggedIn ? <Redirect to="/" /> : <Component {...props} />
//         }}
//     />
// );

// export const AuthRoute = withRouter(connect(mSTP)(Auth))