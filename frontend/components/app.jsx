import React from "react";
import SessionContainer from "./session_container";
import { Route, Switch } from 'react-router-dom';
import splash_bar_container from "./nav_bar/splash_bar_container";
import background_container from "./background/background_container";

const App = () => (
  <div>
    <Route path="/" component={background_container} />
    <Route path="/" component={splash_bar_container} />
    <Route path="/login" component={SessionContainer} />
  </div>
);

export default App;