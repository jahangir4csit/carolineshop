import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../../constants/actionTypes';
import * as api from '../../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
    try{
        dispatch({ type: AUTH_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await api.signIn(formData, config);
        //dispatch({ type: AUTH_SUCCESS, data });
        dispatch({ type: AUTH_SUCCESS, data });
        // history.push('/')
        
    }catch(error){
       dispatch({ type: AUTH_FAIL, payload: error.response.data.message })
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try{
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH_SUCCESS, data });
        history.push('/')
    }catch(error){
        console.log(error);
    }
}