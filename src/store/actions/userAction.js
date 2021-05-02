import * as api from '../../api';
import axios from 'axios';
import { 

    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    ALL_USER_FAIL,

    GET_SELECTED_USER,
    REQUEST_SELECTED_USER,
    SELECTED_USER_FAIL, 

    NEW_USER_REQUEST,
    NEW_USER_SUCCESS,
    NEW_USER_FAIL,
    NEW_USER_RESET,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_RESET,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,

 } 
    from '../../constants/actionTypes.js';

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

const baseUrl = 'http://localhost:8080';


// USER List Action 
export const getUsers = (token) => async (dispatch) => {
    dispatch({ type: ALL_USER_REQUEST })
    try{
        const { data } = await axios.get(`${baseUrl}/user/`, config(token));
        dispatch({ type: ALL_USER_SUCCESS, payload: data})
    }
    catch(error){
        dispatch({ 
            type: ALL_USER_FAIL, 
            payload: error.response.data.message
        })
    }
}


// Create User Action
export const newUser = (userData, token) => async (dispatch) => {
    dispatch({ type: NEW_USER_REQUEST})
    try{
        const { data } = await axios.post(`${baseUrl}/user`, userData, config(token));
        dispatch({ type: NEW_USER_SUCCESS, payload: data })
        dispatch({ type: NEW_USER_RESET })
    }
    catch(error){
        dispatch({ 
            type: NEW_USER_FAIL, 
            payload: error.response.data.message
        })
    }
}

// delete User Action
export const deleteUser = (id, token) => async (dispatch) => {
    try{
        dispatch({ type: DELETE_USER_REQUEST})
        const { data } = await axios.delete(`${baseUrl}/user/${id}`, config(token));
        dispatch({ type: DELETE_USER_SUCCESS, payload: data })
        dispatch({ type: DELETE_USER_RESET })
    }
    catch(error){
        dispatch({ 
            type: DELETE_USER_FAIL, 
            payload: error.response.data.message
        })
    }
}


// User Details Action
export const getUserAction = (userId, token) => async (dispatch) => {
    try{
        dispatch({ type: REQUEST_SELECTED_USER })
        const { data } = await axios.get(`${baseUrl}/user/${userId}`, config(token));
        if(data.username){
            dispatch({ type: GET_SELECTED_USER, payload: data })
        }else{
            dispatch({ 
                type: SELECTED_USER_FAIL, 
            })
        }
    }
    catch(error){
        dispatch({ 
            type: SELECTED_USER_FAIL, 
            payload: error.response.data.message
        })
    }
}

// Edit User Action
export const updateUser = (id, userData, token) => async (dispatch) => {
    try{
        dispatch({ type: UPDATE_USER_REQUEST})
        const { data } = await axios.patch(`${baseUrl}/user/${id}`, userData, config(token));
        if(data.status !== 'error'){
            dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
            dispatch({ type: UPDATE_USER_RESET })
        }else{
            dispatch({
                type: UPDATE_USER_FAIL,
                payload: data.status
            })
            dispatch({ type: UPDATE_USER_RESET })
        }
    }
    catch(error){
        dispatch({ 
            type: UPDATE_USER_FAIL, 
            payload: error.response.data.message
        })
    }
}