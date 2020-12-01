import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
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

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={path}
        render={props => 
            loggedIn ? <Component {...props} />
            : <Redirect to="/" />
        }  
    />
);

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const AuthRoute = withRouter(connect(mSTP, null)(Auth));