import * as api from '../../api';
import axios from 'axios';
import { 
    GET_ALL_PRODUCTS,
    ALL_PRODUCTS_REQUEST, 
    GET_SELECTED_PRODUCT,
    REQUEST_SELECTED_PRODUCT,
    SELECTED_PRODUCT_FAIL, 
    ALL_PRODUCTS_FAIL,

    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,

    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,

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

// **** Collection: Frontend Actions  **** 
// Product List Action 
export const getProducts = () => async (dispatch) => {
    dispatch({ type: ALL_PRODUCTS_REQUEST })
    try{
        const { data } = await api.getProducts();
        dispatch({ type: GET_ALL_PRODUCTS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: ALL_PRODUCTS_FAIL, 
            payload: error.response.data.message
        })
    }
}

// Product Details Action
export const getProductDetails = (productId) => async (dispatch) => {
    dispatch({ type: REQUEST_SELECTED_PRODUCT, payload: productId })
    try{
        const { data } = await api.productDetails(productId);
        dispatch({ type: GET_SELECTED_PRODUCT, payload: data })
    }
    catch(error){
        dispatch({ 
            type: SELECTED_PRODUCT_FAIL, 
            payload: error.response.data.message,
        })
    }
}


// **** Collection: Admin Actions  **** 

// Create Product Action
export const newProduct = (productData, token) => async (dispatch) => {
    dispatch({ type: NEW_PRODUCT_REQUEST })
    try{
        const { data } = await axios.post(`${baseUrl}/products`, productData, config(token));
        dispatch({ type: NEW_PRODUCT_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: NEW_PRODUCT_FAIL, 
            payload: error.response.data.message
        })
    }
}

// UPDATE Product Action
export const updateProduct = (id, productData, token) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST })
    try{
        const { data } = await axios.patch(`${baseUrl}/products/${id}`, productData, config(token));
        if(data.status !== 'error'){
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }else{
            dispatch({ 
                type: UPDATE_PRODUCT_FAIL, 
                payload: data.status
            })
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }

    }
    catch(error){
        dispatch({ 
            type: UPDATE_PRODUCT_FAIL, 
            payload: error.response.data.message
        })
    }
}


// DELETE Product Action
export const deleteProduct = (id, token) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST })
    try{
        const { data } = await axios.delete(`${baseUrl}/products/${id}`, config(token));
        if(data.status !== 'error'){
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data })
            dispatch({ type: DELETE_PRODUCT_RESET })
        }else{
            dispatch({ 
                type: DELETE_PRODUCT_FAIL, 
                payload: data.status
            })
            dispatch({ type: DELETE_PRODUCT_RESET })
        }

    }
    catch(error){
        dispatch({ 
            type: DELETE_PRODUCT_FAIL, 
            payload: error.response.data.message
        })
    }
}

