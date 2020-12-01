import React from "react";
// import SessionContainer from './session_forms/session_container';
import { Route, Switch } from 'react-router-dom';
import splash_bar_container from './nav_bar/splash_bar_container';
import background_container from './background/background_container';
import signup_cont from './session_forms/signup_cont';
import { AuthRoute,  ProtectedRoute } from '../util/route_utils';
import homePage from './home_page/home_page'
import NavBar_container from './nav_bar/nav_bar_container'


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={background_container} />
    <AuthRoute exact  path="/" component={splash_bar_container} />
    {/* <AuthRoute path="/login" component={SessionContainer} /> */}
    <AuthRoute exact path="/signup" component={signup_cont} />
    <ProtectedRoute exact path="/browse" component={NavBar_container} />
    <ProtectedRoute exact path="/browse" component={homePage} />
  </Switch>
);

export default App;