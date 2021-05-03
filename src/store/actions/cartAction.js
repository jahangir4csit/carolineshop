import axios from 'axios';
import { 
    ADD_TO_CART,
} from '../../constants/actionTypes.js';
const baseUrl = 'http://localhost:8080';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${baseUrl}/products/${id}`);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            price: data.price,
            image: data.image,
            stock: data.stock,
            quantity
        }
    })

    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}