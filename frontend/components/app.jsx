import React from "react";
import SessionContainer from './session_forms/session_container';
import { Route, Switch } from 'react-router-dom';
import background_container from './background/splashpage_container';
import signup_cont from './session_forms/signup_cont';
import { AuthRoute,  ProtectedRoute } from '../util/route_utils';
import homePage from './home_page/home_page'
import NavBar_container from './nav_bar/nav_bar_container'


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={background_container} />
    <AuthRoute path="/login" component={SessionContainer} />
    <AuthRoute path="/signup/:email" component={signup_cont} />
    <ProtectedRoute exact path="/browse" component={NavBar_container} />
    {/* <ProtectedRoute exact path="/browse" component={homePage} /> */}
  </Switch>
);

export default App;