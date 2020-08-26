import React from "react";
import SessionContainer from "./session_container";
import { Route, Switch } from 'react-router-dom';
import splash_bar_container from "./nav_bar/splash_bar_container";
import background_container from "./background/background_container";
import signup_cont from "./sign_up_comps/signup_cont";
import { AuthRoute } from '../util/route_utils';



const App = () => (
  <div>
    <Route path="/" component={background_container} />
    <Route path="/" component={splash_bar_container} />
    <Route path="/login" component={SessionContainer} />
    <Route path="/signup" component={signup_cont} />
  </div>
);

export default App;