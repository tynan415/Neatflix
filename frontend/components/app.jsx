import React from "react";
import SessionContainer from './session_forms/session_container';
import { Route, Switch } from 'react-router-dom';
import splashpage_container from './background/splashpage_container';
import signup_cont from './session_forms/signup_cont';
import { AuthRoute,  ProtectedRoute } from '../util/route_utils';
import HomePageContainer from './home_page/home_page_cont'


const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={splashpage_container} />
    <AuthRoute path="/login" component={SessionContainer} />
    <AuthRoute path="/signup/:email" component={signup_cont} />
    <ProtectedRoute exact path="/browse" component={HomePageContainer} />
  </Switch>
);

export default App;