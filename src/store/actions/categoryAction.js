import * as api from '../../api';
import axios from 'axios';
import { 
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,
    NEW_CATEGORY_RESET,

    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,

    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_RESET,

    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_RESET,

    DETAILS_CATEGORY_REQUEST,
    DETAILS_CATEGORY_SUCCESS,
    DETAILS_CATEGORY_FAIL,
 } 
    from '../../constants/actionTypes.js';

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

// Create Category Action
export const newCategory = (categoryData, token) => async (dispatch) => {
    dispatch({ type: NEW_CATEGORY_REQUEST})
    try{
        // const config = {
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type" : "application/json",
        //         "Authorization" : `bearer ${token}`,
        //     }
        // }
        const { data } = await axios.post(`${baseUrl}/category`, categoryData, config(token));
        dispatch({ type: NEW_CATEGORY_SUCCESS, payload: data })
        dispatch({ type: NEW_CATEGORY_RESET })
    }
    catch(error){
        dispatch({ 
            type: NEW_CATEGORY_FAIL, 
            payload: error.response.data.message
        })
    }
}

// Category List Action 
export const getCategories = () => async (dispatch) => {
    dispatch({ type: ALL_CATEGORY_REQUEST })
    try{
        const { data } = await api.getCategories();
        dispatch({ type: ALL_CATEGORY_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: ALL_CATEGORY_FAIL, 
            payload: error.response.data.message
        })
    }
}

// delete Category Action
export const deleteCategory = (id, token) => async (dispatch) => {
    try{
        dispatch({ type: DELETE_CATEGORY_REQUEST})
        const { data } = await axios.delete(`${baseUrl}/category/${id}`, config(token));
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data })
        dispatch({ type: DELETE_CATEGORY_RESET })
    }
    catch(error){
        dispatch({ 
            type: DELETE_CATEGORY_FAIL, 
            payload: error.response.data.message
        })
    }
}


// Category Details Action
export const getCategoryDetails = (categoryId) => async (dispatch) => {
    try{
        dispatch({ type: DETAILS_CATEGORY_REQUEST })
        const { data } = await api.getCategoryDetails(categoryId);
        dispatch({ type: DETAILS_CATEGORY_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: DETAILS_CATEGORY_FAIL, 
            payload: error.response.data.message,
        })
    }
}

// Edit Category Action
export const updateCategory = (id, token, categoryData) => async (dispatch) => {
    try{
        dispatch({ type: UPDATE_CATEGORY_REQUEST})
        const { data } = await axios.patch(`${baseUrl}/category/${id}`, categoryData, config(token));
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data })
        dispatch({ type: UPDATE_CATEGORY_RESET })
    }
    catch(error){
        dispatch({ 
            type: UPDATE_CATEGORY_FAIL, 
            payload: error.response.data.message
        })
    }
}