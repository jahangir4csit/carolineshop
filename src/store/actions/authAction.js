import { 
    AUTH_REQUEST, 
    AUTH_SUCCESS, 
    AUTH_FAIL, 
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    USER_REG_FAIL, 
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL, 
} from '../../constants/authConstants';
import axios from 'axios';
import * as api from '../../api/index.js';

const baseUrl = 'http://localhost:8080';

const config = (token) => {
    return(
        {
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
                "Authorization" : `bearer ${token}`,
            }
        }
    )
}

// *** User Sign in Action
export const signin = (email, password) => async (dispatch) => {
    try{
        dispatch({ type: AUTH_REQUEST, payload: {email, password} })
        const { data } = await axios.post(`${baseUrl}/signin/`, {email,password})
        if(data.userInfo){
            dispatch({ type: AUTH_SUCCESS, payload: data });
            sessionStorage.setItem('userInfo', JSON.stringify(data))
        }else{
            dispatch({ type: AUTH_FAIL, payload: data })
        }
        
    }catch(error){
       dispatch({ 
        type: AUTH_FAIL, 
        payload: error.response })
    }
}

// *** User Registration Action
export const signup = (userData) => async (dispatch) => {
    try{
        dispatch({ type: USER_REG_REQUEST, userData });
        const { data } = await api.signUp(userData);
        dispatch({ type: USER_REG_SUCCESS, payload: data });
    }catch(error){
        dispatch({ 
            type: USER_REG_FAIL, 
            payload: error.response.data.message 
        })
    }
}

// *** Load User Action
export const loadUser = (token) => async (dispatch) => {
    try{
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get(`${baseUrl}/my-detail/`, config(token));
        dispatch({ type: LOAD_USER_SUCCESS, payload: data });
        //history.push('/')
    }catch(error){
        dispatch({ 
            type: LOAD_USER_FAIL, 
            payload: error.response.data.message 
        })
    }
}

// *** User Logout Action 
export const logout = () => async (dispatch) => {
    try{
        dispatch({ type: LOGOUT_SUCCESS});
        //history.push('/')
    }catch(error){
        dispatch({ 
            type: LOGOUT_FAIL, 
            payload: error.response.data.message 
        })
    }
}