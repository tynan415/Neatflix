import React from "react";
import SessionContainer from './session_container';
import { Route, Switch } from 'react-router-dom';
import splash_bar_container from './nav_bar/splash_bar_container';
import background_container from './background/background_container';
import signup_cont from './sign_up_comps/signup_cont';
import { AuthRoute } from '../util/route_utils';
import homePage from './home_page/home_page'
import NavBar from './nav_bar/nav_bar'


const App = () => (
  <div>
    <Route path="/" component={background_container} />
    <Route path="/" component={splash_bar_container} />
    <Route path="/login" component={SessionContainer} />
    <Route path="/signup" component={signup_cont} />
    <Route path="/browse" component={NavBar} />
    <Route path="/browse" component={homePage} />
  </div>
);

export default App;