import auth, { initialState } from '../reducers/auth';
import {
    LOG_OUT
} from '../actions/action_constants';


describe('auth reducer log out', () => { 
  
    it('AUTH_LOG_OUT', () => { 

        let action = {
            type: LOG_OUT,
            payload: {
                name: "admin"
            }
        };

        let initialState = {
            user: action.payload.name,
            errorMsg: '',
            logStatus: {
                authorized: false
            },
        };
        
        expect(auth(initialState, action)).toEqual({
            ...initialState,
            user: null,
            logStatus: {
                authorized: false
            }
        });
    });

});

// to run test write in console: npm test 
// чтобы начать тест, напишите в консоли: npm run test