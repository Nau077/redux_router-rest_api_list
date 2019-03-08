import posts, { initialState } from '../reducers/posts';
import {
    GET_POSTS
} from '../actions/action_constants';


describe('post reducer', () => { 
  
    it('POST_GET_REQUEST', () => { 
        const action = {
            type: GET_POSTS,
        };

        expect(posts(initialState, action)).toEqual({
            ...initialState,
            postsList: action.payload,
        });
    });

});

// to run test write in console: npm test 
// чтобы начать тест, напишите в консоли: npm run test