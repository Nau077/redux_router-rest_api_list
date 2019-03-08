import {
    LOG_IN,
    LOG_IN_FAILURE,
    LOG_OUT,
} from '../actions/action_constants';

export let initialState = {
    user: null,
    errorMsg: '',
    logStatus: {
        authorized: false
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
    case LOG_IN:
        return {
            ...state,
            user: action.payload.name,
            errorMsg: '',
            logStatus: {
                authorized: true
            }
        };
    case LOG_IN_FAILURE:
        return {
            ...state,
            errorMsg: action.payload.errorMsg
        };
    case LOG_OUT:
        return {
            ...state,
            user: null,
            errorMsg: '',
            logStatus: {
                authorized: false
            }
        };

    default:
        return state;
    }
};
