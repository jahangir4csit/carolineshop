import { 
    ADD_TO_CART,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    SAVE_SHIPPING_DETAILS

} from '../../constants/actionTypes.js';

const initial = {
    cartItems: [],
    shippingDetails: {},
};

export const CartReducer = (state=initial, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload;
            const isItemExist = state.cartItems.find(i => i.product === item.product);
            if(isItemExist){
                return{
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                     total: state.total + 1,
                };
            }
        case SAVE_SHIPPING_DETAILS:
            return{
                ...state,
                payload: action.payload
            }
        default: 
            return state;
    }
}


// get Cart item Reducer
export const getCartReducer = (state=initial, action)=>{
    switch(action.type){
        case GET_CART_REQUEST:
            return {
                    loading: true,
                    cartItems: [],
                };
        case GET_CART_SUCCESS:
            return {
                    loading: false,
                    cartItems: action.payload
                };
        case GET_CART_FAIL: 
                return {
                    loading: false,
                    error: action.payload
                };
        default: 
            return state;
    }
}