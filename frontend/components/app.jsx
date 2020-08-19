import React from "react";
import SessionContainer from "./session_container";

const App = () => (
  <div>
    <header>
      <h1>Neatflix</h1>
      <SessionContainer />
    </header>
    <Route path="/" component={Session} />
  </div>
);

export default App;