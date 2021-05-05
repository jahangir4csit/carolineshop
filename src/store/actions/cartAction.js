import axios from 'axios';
import { 
    ADD_TO_CART,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    SAVE_SHIPPING_DETAILS,
} from '../../constants/actionTypes.js';

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

export const addItemToCart = (actionData, token) => async (dispatch) => {

    const {data} = await axios.post(`${baseUrl}/cart/`, actionData, config(token));
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data
        }
    })

    //sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const getCartItemAction = (token) => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST})
    try {
        const {data} = await axios.get(`${baseUrl}/cart`, config(token));
        if(data){
            dispatch({ type: GET_CART_SUCCESS, payload: data })
        }else{
            dispatch({ 
                type: GET_CART_FAIL, 
                payload: data
            })
        }
        
    } catch (error) {
        dispatch({ 
            type: GET_CART_FAIL, 
            payload: error
        })
    }
}

export const saveShippingDetails = (actionData) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_DETAILS,
        payload: actionData
    })

    sessionStorage.setItem('shippingDetails', JSON.stringify(actionData))
}
