import React from "react";
import SessionContainer from "./session_container";
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/" component={SessionContainer} />
  </div>
);

export default App;