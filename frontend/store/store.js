import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadState = {}) => {
    return createStore(rootReducer, preloadState, applyMiddleware(thunk, logger));
}

export default configureStore;