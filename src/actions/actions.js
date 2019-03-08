import { LOG_IN, LOG_OUT, LOG_IN_FAILURE, GET_POSTS } from './action_constants';
import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

function checkCredentials(params) {
    if (
        params.username.toLowerCase() !== 'admin' ||
        params.password !== '1234'
    ) {
        return false;
    }

    return true;
}

export function logIn(params, cb) {
    return dispatch => {
        if (checkCredentials(params)) {
            dispatch({
                type: LOG_IN,
                payload: {
                    name: params.username
                }
            });
            cb();
        } else {
            dispatch({
                type: LOG_IN_FAILURE,
                payload: {
                    errorMsg: 'Имя пользователя или пароль введены не верно'
                },
                error: true
            });
        }
    };
}

export function logOut() {
    return {
        type: LOG_OUT
    };
}

 
export const getPosts = () => dispatch => {
    axios.get(POST_URL)
        .then((response) => {
            const articles =  response.data;
 
            dispatch({ type: GET_POSTS, payload: articles });
        }); 

};

 