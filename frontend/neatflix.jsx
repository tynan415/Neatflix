import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        }
    }
    
    // debugger
    const store = configureStore(preloadedState);
    const root = document.getElementById("root");
    window.getState = store.getState()
    ReactDOM.render(<Root store={store} />, root);
});