import axios from 'axios';
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from '../../constants/actionTypes.js';

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

export const createOrder = (order, token) => async (dispatch) => {
    
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const { data } = await axios.get(`${baseUrl}/order/checkout`, config(token));
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
        sessionStorage.setItem('orderInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message
        });
        console.log('Error Order!');
    }

}



