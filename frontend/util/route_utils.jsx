import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path , component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/browse" />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path}
        exact={exact}
        render={props => 
            loggedIn ? <Component {...props} />
            : <Redirect to="/" />
        }  
    />
);

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));