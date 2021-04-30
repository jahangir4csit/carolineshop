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
 } 
    from '../../constants/actionTypes.js';

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
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json",
                "Authorization" : `bearer ${token}`,
            }
        }
        const { data } = await axios.post('http://localhost:8080/products', productData, config);
        dispatch({ type: NEW_PRODUCT_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: NEW_PRODUCT_FAIL, 
            payload: error.response.data.message
        })
    }
}
