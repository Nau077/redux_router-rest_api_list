import auth, { initialState } from '../reducers/auth';
import {
    LOG_IN
} from '../actions/action_constants';


describe('auth reducer log in', () => { 
  
    it('AUTH_LOG_IN', () => { 

        let action = {
            type: LOG_IN,
            payload: {
                name: "admin"
            }
        };
        
        let initialState = {
            user: null,
            errorMsg: '',
            logStatus: {
                authorized: false
            },
        };

        expect(auth(initialState, action)).toEqual({
            ...initialState,
            user: action.payload.name,
            logStatus: {
                authorized: true
            }
        });
    });

});

// to run test write in console: npm test 
// чтобы начать тест, напишите в консоли: npm run test
