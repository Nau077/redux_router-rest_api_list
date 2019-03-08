import { combineReducers } from 'redux';
import authReducer from './auth';
import newsReducer from './posts';

export default combineReducers({
    auth: authReducer,
    posts: newsReducer,
});
