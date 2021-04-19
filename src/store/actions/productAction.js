import * as api from '../../api';
import { 
    GET_ALL_PRODUCTS, 
    CREATE_PRODUCT, 
    GET_SELECTED_PRODUCT,
    REQUEST_SELECTED_PRODUCT,
    SELECTED_PRODUCT_FAIL, 
    ALL_PRODUCTS_FAIL
 } 
    from '../../constants/actionTypes.js';

export const getProducts = () => async (dispatch) => {
    try{
        const { data } = await api.getProducts()
        dispatch({ type: GET_ALL_PRODUCTS, payload: data })
    }
    catch(error){
        dispatch({ 
            type: ALL_PRODUCTS_FAIL, 
            payload: error.response.data.message
        })
    }
}

export const createProduct = (post) => async (dispatch) => {
    try{
        const { data } = await api.createProduct(post)
        dispatch({ type: CREATE_PRODUCT, payload: data })
    }
    catch(error){
        console.log(error)
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: REQUEST_SELECTED_PRODUCT})
        const { data } = await api.productDetails(id);
        dispatch({ type: GET_SELECTED_PRODUCT, payload: data })
    }
    catch(error){
        dispatch({ 
            type: SELECTED_PRODUCT_FAIL, 
            payload: error.response.data.message,
        })
    }
}