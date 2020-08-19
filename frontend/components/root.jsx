import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "";
import App from "./app";
import Session from "./session";

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
            <Route path="/" component={Session} />
     
            <App />
      </ HashRouter>
  </Provider>
);

export default Root;