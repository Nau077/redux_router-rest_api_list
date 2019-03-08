import combineReducers from '../reducers/index';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const createStoreWithMiddleware = compose(applyMiddleware(thunk, createLogger))(
    createStore
);

const store = createStoreWithMiddleware(
    combineReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;

// npm i redux react-redux react-router
// npm install redux-thunk
