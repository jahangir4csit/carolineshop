import axios from 'axios';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS, 
    CREATE_ORDER_FAIL,

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

export const createOrder = (order, token) => async (dispatch, getState) => {
    try {
        dispatch({type: CREATE_ORDER_REQUEST})
        const { data } = await axios.post(`${baseUrl}/order/checkout`, order, config(token));
        console.log(data, 'order place');
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
        sessionStorage.setItem('orderInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}



