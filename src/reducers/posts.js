import {
    GET_POSTS
} from '../actions/action_constants';

export let initialState = {
    postsList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_POSTS:
        return {
            postsList: action.payload,
        };
    default:
        return state;
    }
};
